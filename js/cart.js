/* ============================================
   CART.JS
   localStorage-backed shopping cart system
   ============================================ */

const Cart = (function () {
  const STORAGE_KEY = 'sleepingcat_cart';

  /** Read cart from localStorage */
  function _load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  /** Write cart to localStorage */
  function _save(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  /** Parse price string like "₹ 580" → 580 */
  function _parsePrice(priceStr) {
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10) || 0;
  }

  return {

    /** Get all items in the cart */
    getItems: function () {
      return _load();
    },

    /** Get item count (total quantity) */
    getCount: function () {
      return _load().reduce(function (sum, item) { return sum + item.qty; }, 0);
    },

    /** Get total price */
    getTotal: function () {
      return _load().reduce(function (sum, item) {
        return sum + (_parsePrice(item.price) * item.qty);
      }, 0);
    },

    /**
     * Add a product to the cart.
     * @param {Object} product  – must have { slug, name, price, weight, type }
     * @param {number} [qty=1]
     */
    addItem: function (product, qty) {
      qty = qty || 1;
      var items = _load();
      var existing = null;
      for (var i = 0; i < items.length; i++) {
        if (items[i].slug === product.slug) {
          existing = items[i];
          break;
        }
      }
      if (existing) {
        existing.qty += qty;
      } else {
        items.push({
          slug:   product.slug,
          name:   product.name,
          price:  product.price,
          weight: product.weight || '',
          type:   product.type  || '',
          cardStyle: product.cardStyle || '',
          qty:    qty
        });
      }
      _save(items);
      Cart.renderBadge();
      Cart.showToast(product.name + ' added to cart');
    },

    /** Remove a product entirely */
    removeItem: function (slug) {
      var items = _load().filter(function (item) { return item.slug !== slug; });
      _save(items);
      Cart.renderBadge();
    },

    /** Set quantity for a product (removes if qty <= 0) */
    updateQty: function (slug, newQty) {
      var items = _load();
      if (newQty <= 0) {
        items = items.filter(function (item) { return item.slug !== slug; });
      } else {
        for (var i = 0; i < items.length; i++) {
          if (items[i].slug === slug) {
            items[i].qty = newQty;
            break;
          }
        }
      }
      _save(items);
      Cart.renderBadge();
    },

    /** Clear the entire cart */
    clear: function () {
      _save([]);
      Cart.renderBadge();
    },

    /** Update the cart badge count in the navbar */
    renderBadge: function () {
      var count = Cart.getCount();
      var badges = document.querySelectorAll('.cart-badge');
      for (var i = 0; i < badges.length; i++) {
        badges[i].textContent = count;
        badges[i].style.display = count > 0 ? 'flex' : 'none';
      }
    },

    /** Show a brief toast notification */
    showToast: function (message) {
      // Remove existing toast
      var old = document.getElementById('cart-toast');
      if (old) old.remove();

      var toast = document.createElement('div');
      toast.id = 'cart-toast';
      toast.className = 'cart-toast';
      toast.innerHTML = '<span>✓ ' + message + '</span>';
      document.body.appendChild(toast);

      // Trigger animation
      requestAnimationFrame(function () {
        toast.classList.add('show');
      });

      setTimeout(function () {
        toast.classList.remove('show');
        setTimeout(function () { toast.remove(); }, 400);
      }, 2200);
    },

    /**
     * Build a WhatsApp checkout message from the cart
     * and return the full wa.me URL.
     */
    getWhatsAppCheckoutURL: function () {
      var items = _load();
      if (items.length === 0) return null;

      var lines = ['*New Order from The Sleeping Cat Farm Website*', ''];
      var total = 0;
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var unitPrice = _parsePrice(item.price);
        var subtotal  = unitPrice * item.qty;
        total += subtotal;
        lines.push(
          (i + 1) + '. ' + item.name.replace(/&amp;/g, '&') +
          '  ×  ' + item.qty +
          '  —  ₹' + subtotal +
          (item.weight ? '  (' + item.weight + ' each)' : '')
        );
      }
      lines.push('');
      lines.push('*Total: ₹' + total + '*');
      lines.push('');
      lines.push('Please share availability and delivery details.');

      var phone = '917972933043';
      if (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.brand && SITE_CONFIG.brand.whatsapp) {
        phone = SITE_CONFIG.brand.whatsapp;
      }
      return 'https://wa.me/' + phone + '?text=' + encodeURIComponent(lines.join('\n'));
    }
  };
})();

/* Auto-render badge when script loads */
document.addEventListener('DOMContentLoaded', function () {
  Cart.renderBadge();
});
