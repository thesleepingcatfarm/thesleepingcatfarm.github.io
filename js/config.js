const SITE_CONFIG = {

  /* ─── BRAND & CONTACT ─── */
  brand: {
    name:         "The Sleeping Cat Farm",
    whatsapp:     "917972933043",
  },

  /* ─── NAVIGATION ─── */
  nav: [
    {
      label: "Shop Online",
      href:  "pages/cheese-collection.html",
    },
    {
      label: "Cheese Subscription",
      href:  "pages/subscription.html",
    },
    {
      label: "Events & Workshops",
      href:  "pages/events.html",
    },
    {
      label: "Recipes",
      href:  "pages/recipes.html",
    },
    {
      label: "Our Story",
      href:  "index.html#story",
    },
    {
      label: "Contact Us",
      href:  "index.html#contact-section",
    },
  ],

  /* ─── MARQUEE STRIP ─── */
  marquee: [
    "Hand Crafted Daily",
    "Free Range Milk",
    "Small Batch",
    "Preservative Free",
    "High Quality Ingredients",
    "Rich and Natural Flavours",
  ],

  /* ─── STORY / ABOUT US ─── */
  story: {
    label:  "Our Story",
    title:  'A Farm, a Dream,<br><em>&amp; a Sleeping Cat</em>',
    body:   "Nestled in the quiet hills, The Sleeping Cat Farm was born from a simple belief - that the finest cheese requires nothing " +
            "but exceptional milk, clean hands, and the patience to let time do its work. " +
            "Meet our resident farm cats, Mau-Pinky-Rani, whose serene presence inspires our unhurried approach to cheesemaking.",
    pillars: [
      { title: "High Quality Milk", desc: "Milk sourced only from pasture-raised cows and buffaloes." },
      { title: "Natural Aging",     desc: "Wheels rest in natural aging rooms for months." },
      { title: "Small Batch",       desc: "Never more than 40 wheels produced each season." },
      { title: "Preservative Free", desc: "Zero additives. Pure milk, culture, rennet, salt &amp; time." },
    ],
  },


  /* ─── PROCESS ─── */
  process: {
    label: "Craft",
    title: 'From Pasture<br><em>to Your Table</em>',
    desc:  "Every cheese follows the same unhurried ritual - perfected over time.",
    steps: [
      { number: "01", title: "Morning Milking",       desc: "Fresh milk collected at dawn, filtered and brought to the creamery within the hour." },
      { number: "02", title: "Curding &amp; Pressing", desc: "Cultures and rennet are added by hand. Curds are cut, stirred and gently pressed into moulds." },
      { number: "03", title: "Salting &amp; Turning",  desc: "Each wheel is salted with sea salt and turned daily - a ritual that builds flavour and rind." },
      { number: "04", title: "Natural Aging",            desc: "Wheels rest in our natural aging facility at a constant temperature until they reach their full potential." },
    ],
  },


  /* ─── PRODUCTS ─── */
  products: [
    {
      slug:      "dozing-gold",
      cardStyle: "aged",
      image:     null,
      type:      "Semi Hard · Aged 12 Months",
      name:      "The Dozing Gold",
      desc:      "A rich, buttery cheddar with caramel notes and a crystalline crunch. Our flagship - aged in the deepest part of the cave.",
      price:     "₹ 580",
      weight:    "200g",
      bestWithin:"60 days",
      rennet:    "Microbial / Vegetarian",
      nutrition: { energy:"412 Kcal", carbs:"1.2 g", fat:"34.5 g", protein:"25.8 g", sodium:"480 mg" },
      storage:   [
        "Wrap in parchment paper, then loosely in cling film.",
        "Store in the warmest part of your fridge (door shelf).",
        "Remove from fridge 30 minutes before serving to release full flavour.",
        "Once opened, consume within 10–14 days for best taste."
      ],
      howToEnjoy: "Slice thinly and pair with a mild honey drizzle. Melt over warm crusty bread or add shaved pieces to a charcuterie board.",
      pairings:  { condiments: ["Honey", "Fig Jam", "Sourdough Crackers"], wine: "Chardonnay or a light Pinot Noir" },
    },
    {
      slug:      "morning-mist",
      cardStyle: "fresh",
      image:     null,
      type:      "Fresh · Ready in 3 Days",
      name:      "Morning Mist",
      desc:      "A delicate chèvre-style cheese with a clean, slightly tangy finish. Perfect on warm toast with honey.",
      price:     "₹ 340",
      weight:    "150g",
      bestWithin:"14 days",
      rennet:    "Microbial / Vegetarian",
      nutrition: { energy:"291 Kcal", carbs:"3.4 g", fat:"22.1 g", protein:"19.6 g", sodium:"310 mg" },
      storage:   [
        "Keep sealed in its original packaging until opened.",
        "Once opened, transfer to an airtight container.",
        "Refrigerate at 4–6 °C. Do not freeze.",
        "Best consumed within 7 days of opening."
      ],
      howToEnjoy: "Spread generously on warm toast, drizzle with raw honey and scatter fresh thyme leaves on top.",
      pairings:  { condiments: ["Raw Honey", "Walnuts", "Fig Compote"], wine: "Sauvignon Blanc or Prosecco" },
    },
    {
      slug:      "twilight-vein",
      cardStyle: "blue",
      image:     null,
      type:      "Blue · Aged 8 Months",
      name:      "Twilight Vein",
      desc:      "Bold, earthy and beautifully marbled. An assertive blue cheese with a velvety, complex finish.",
      price:     "₹ 720",
      weight:    "180g",
      bestWithin:"45 days",
      rennet:    "Microbial / Vegetarian",
      nutrition: { energy:"353 Kcal", carbs:"0.5 g", fat:"29.4 g", protein:"21.2 g", sodium:"620 mg" },
      storage:   [
        "Wrap tightly in foil or parchment to prevent drying.",
        "Store in the coldest part of your fridge (not the freezer).",
        "Allow to come to room temperature 20 minutes before serving.",
        "Consume within 21 days once opened."
      ],
      howToEnjoy: "Crumble over a fresh arugula salad with toasted walnuts, or melt into a rich sauce for pasta.",
      pairings:  { condiments: ["Walnut Halves", "Dried Cranberries", "Dark Chocolate"], wine: "Sauternes or a robust Shiraz" },
    },
    {
      slug:      "meadow-tomme",
      cardStyle: "goat",
      image:     null,
      type:      "Goat Milk · Aged 4 Months",
      name:      "Meadow Tomme",
      desc:      "Nutty and slightly sweet with a natural rind. Made from milk of our pasture-grazing Alpine goats.",
      price:     "₹ 490",
      weight:    "220g",
      bestWithin:"40 days",
      rennet:    "Microbial / Vegetarian",
      nutrition: { energy:"368 Kcal", carbs:"0.8 g", fat:"30.2 g", protein:"24.1 g", sodium:"395 mg" },
      storage:   [
        "Leave the natural rind intact until serving.",
        "Wrap in slightly damp parchment; store in the fridge.",
        "Ideal serving temperature is around 18–20 °C.",
        "Best within 25 days of opening."
      ],
      howToEnjoy: "Slice and serve at room temperature on a board with dried apricots and roasted almonds.",
      pairings:  { condiments: ["Dried Apricots", "Almond Butter", "Herb Crackers"], wine: "Viognier or a light Grenache" },
    },
    {
      slug:      "ember-crown",
      cardStyle: "smoke",
      image:     null,
      type:      "Smoked · Aged 6 Months",
      name:      "Ember Crown",
      desc:      "Slow-smoked over applewood for 48 hours, then cave-aged. A complex, smoky semi-hard with a golden rind.",
      price:     "₹ 650",
      weight:    "200g",
      bestWithin:"50 days",
      rennet:    "Microbial / Vegetarian",
      nutrition: { energy:"398 Kcal", carbs:"0.6 g", fat:"33.1 g", protein:"26.4 g", sodium:"520 mg" },
      storage:   [
        "Store in its original wax wrapping until opened.",
        "After opening, wrap in fresh parchment and refrigerate.",
        "Remove from fridge 45 minutes before serving.",
        "Pairs beautifully with smoked meats — keep together in a container."
      ],
      howToEnjoy: "Grate generously over grilled vegetables or slice thick for a bold charcuterie board centrepiece.",
      pairings:  { condiments: ["Smoked Paprika Jam", "Apple Slices", "Rye Crackers"], wine: "Zinfandel or an Amber Ale" },
    },
    {
      slug:      "purr-spread",
      cardStyle: "cream",
      image:     null,
      type:      "Spreadable · Fresh",
      name:      "Purr &amp; Spread",
      desc:      "Our silky cream cheese blended with wildflower honey and a hint of thyme. The cat's favourite.",
      price:     "₹ 280",
      weight:    "200g",
      bestWithin:"18 days",
      rennet:    "Microbial / Vegetarian",
      nutrition: { energy:"312 Kcal", carbs:"5.2 g", fat:"28.4 g", protein:"7.8 g", sodium:"180 mg" },
      storage:   [
        "Keep refrigerated at all times. Do not leave out longer than 2 hours.",
        "Seal the lid tightly after each use.",
        "Do not freeze — texture will be affected.",
        "Best consumed within 10 days of opening."
      ],
      howToEnjoy: "Spread on warm bagels, use as a dip for vegetable sticks, or swirl into scrambled eggs at the last minute.",
      pairings:  { condiments: ["Sesame Crackers", "Cherry Tomatoes", "Fresh Basil"], wine: "Moscato d'Asti or a sparkling Rosé" },
    },
  ],


  /* ─── FEATURED / SIGNATURE PRODUCT ─── */
  featured: {
    label:   "Signature Wheel",
    title:   'The Sleeping<br><em>Cat Reserve</em>',
    desc:    "Our most prized creation - a clothbound cheddar aged for a full 18 months in the deepest parts of our aging facility.",
    image:   null,
    details: [
      { label: "Age",    value: "18 Months" },
      { label: "Milk",   value: "Jersey Cow" },
      { label: "Weight", value: "~900g" },
    ],
    cta: "Order via WhatsApp",
    whatsappMsg: "I am interested in ordering The Sleeping Cat Reserve (18-month aged cheddar). Please share availability and delivery details.",
  },


  /* ─── TESTIMONIALS ─── */
  testimonials: [
    { quote: "The Dozing Gold is unlike any cheddar I've had in India. Absolutely extraordinary depth of flavour.",                                          author: "Priya",            location: "Mumbai"    },
    { quote: "We served their cheese at our dinner party and every single guest asked where it came from.",                                              author: "Rahul &amp; Anita", location: "Bangalore" },
    { quote: "Finally, artisanal cheese that feels genuinely luxurious. The packaging alone tells you this is something special.",                            author: "Chef Vikram",       location: "Delhi"     },
    ],


  /* ─── SUBSCRIPTION ─── */
  subscription: {
    label: "Monthly Box",
    title: 'Never Run Out<br><em>of Good Cheese</em>',
    desc:  "A curated selection of our finest wheels, delivered to your door every month. Each box is seasonal, hand-picked, and accompanied by tasting notes.",
    cta:   "Explore Subscriptions",
    /* Full subscription page content */
    page: {
      heroTitle: 'Cheese, Delivered<br><em>Every Month</em>',
      heroDesc:  "Forget the supermarket. Each month we hand-pick a seasonal assortment of our finest wheels and deliver them straight to your door — with tasting notes, pairing guides, and a little story behind every cheese.",
      tiers: [
        {
          name:     "The Kitten Box",
          price:    "₹ 890 / month",
          cheeses:  2,
          weight:   "~350g total",
          perks:    ["2 seasonal cheeses", "Tasting notes card", "Free delivery", "Cancel any time"],
          highlight: false,
        },
        {
          name:     "The Cat Nap Box",
          price:    "₹ 1,490 / month",
          cheeses:  3,
          weight:   "~580g total",
          perks:    ["3 seasonal cheeses", "Tasting notes card", "Pairing guide", "Free delivery", "Priority access to limited editions", "Cancel any time"],
          highlight: true,
        },
        {
          name:     "The Fat Cat Box",
          price:    "₹ 2,190 / month",
          cheeses:  5,
          weight:   "~950g total",
          perks:    ["5 seasonal cheeses", "Tasting notes card", "Pairing guide", "Artisan crackers included", "Free delivery", "Priority access to limited editions", "Exclusive member events", "Cancel any time"],
          highlight: false,
        },
      ],
      formHeading: "Ready to Subscribe?",
      formDesc:    "Fill in the form below and we will send you all the details via email within 24 hours.",
    },
  },

  /* ─── EVENTS & WORKSHOPS ─── */
  events: [
    {
      slug:     "summer-tasting-2025",
      title:    "Summer Cheese Tasting Evening",
      date:     "Saturday, 15 March 2025",
      time:     "6:00 PM – 9:00 PM",
      location: "The Sleeping Cat Farm, Mumbai",
      price:    "₹ 1,200 per person",
      category: "Tasting",
      image:    null,
      shortDesc:"Join us for an intimate evening of guided cheese tasting under the stars. Sample 6 of our finest wheels paired with local wines and artisan crackers.",
      longDesc: "This summer we are opening the farm gates for an exclusive tasting evening. Our cheesemaker will walk you through the story behind each wheel — from the morning milking to the moment it leaves the cave. You will taste 6 cheeses, each paired with a carefully chosen wine or condiment. Nibbles, cheese boards, and great company included. Limited to 30 guests so we can keep it intimate and personal. A wonderful way to discover what makes cave-aged cheese so special.",
      highlights: [
        "Guided tasting of 6 artisan cheeses",
        "Wine & condiment pairings",
        "Meet the cheesemaker",
        "Farm tour at sunset",
        "Take-home cheese goodie bag"
      ],
      whatsappMsg: "I am interested in attending the Summer Cheese Tasting Evening on 15 March 2025. Please share booking details.",
    },
  ],


  /* ─── RECIPES ─── */
  recipes: [
    {
      slug:     "grilled-halloumi-salad",
      title:    "Grilled Dozing Gold &amp; Arugula Salad",
      category: "Salad",
      time:     "20 mins",
      servings: 2,
      image:    "assets/images/recipe-1.svg",
      intro:    "A simple, elegant salad that lets the rich, buttery flavour of The Dozing Gold shine. Perfect as a light lunch or a starter.",
      ingredients: [
        "200g The Dozing Gold, sliced thick",
        "80g fresh arugula",
        "1 small handful of toasted walnuts",
        "1 ripe pear, thinly sliced",
        "2 tbsp extra virgin olive oil",
        "1 tbsp balsamic glaze",
        "Salt &amp; freshly cracked black pepper",
      ],
      method: [
        "Heat a non-stick pan or grill over medium-high heat. No oil needed.",
        "Place thick slices of Dozing Gold on the pan. Grill for 2–3 minutes each side until golden and slightly crisp on the outside.",
        "While the cheese grills, arrange arugula on two plates. Scatter the pear slices and walnuts over.",
        "Lay the warm grilled cheese slices on top of the salad.",
        "Drizzle generously with olive oil and balsamic glaze. Season with salt and pepper.",
        "Serve immediately while the cheese is still warm and melty.",
      ],
    },
    {
      slug:     "twilight-vein-pasta",
      title:    "Twilight Vein Creamy Blue Cheese Pasta",
      category: "Pasta",
      time:     "25 mins",
      servings: 3,
      image:    "assets/images/recipe-2.svg",
      intro:    "Silky, bold, and deeply satisfying. This pasta turns a humble weeknight dinner into something truly special.",
      ingredients: [
        "300g spaghetti or linguine",
        "150g Twilight Vein blue cheese, crumbled",
        "200ml heavy cream",
        "2 cloves garlic, minced",
        "30g butter",
        "Fresh parsley, chopped",
        "Freshly grated black pepper",
        "A pinch of nutmeg",
      ],
      method: [
        "Cook pasta in well-salted boiling water according to packet instructions. Reserve ½ cup of pasta water before draining.",
        "In a large pan, melt butter over medium heat. Add garlic and sauté for 30 seconds until fragrant.",
        "Pour in the cream and bring to a gentle simmer. Stir in the crumbled Twilight Vein until melted and smooth.",
        "Add a pinch of nutmeg and season generously with black pepper.",
        "Toss the drained pasta into the sauce. Add splashes of reserved pasta water to loosen if needed — the sauce should coat every strand.",
        "Plate up immediately. Top with fresh parsley and an extra crumble of blue cheese if you like.",
      ],
    },
    {
      slug:     "ember-crown-grilled-sandwich",
      title:    "Ember Crown Smoked Cheese Sandwich",
      category: "Sandwich",
      time:     "15 mins",
      servings: 2,
      image:    "assets/images/recipe-3.svg",
      intro:    "The ultimate grilled cheese sandwich, elevated with smoky Ember Crown. Crispy on the outside, gloriously melty within.",
      ingredients: [
        "4 slices sourdough bread",
        "180g Ember Crown, thinly sliced",
        "2 tbsp butter, softened",
        "1 tbsp Dijon mustard (optional)",
        "A few leaves of fresh spinach",
        "Thin slices of apple (optional, for sweetness)",
      ],
      method: [
        "Butter one side of each bread slice generously.",
        "On the unbuttered side of two slices, spread a thin layer of Dijon mustard if using.",
        "Layer spinach, apple slices (if using), and generous amounts of Ember Crown on the mustard side.",
        "Top with the remaining bread slices, buttered side facing out.",
        "Heat a pan over medium-low heat. Place sandwiches in — no extra oil needed thanks to the butter.",
        "Cook 3–4 minutes per side, pressing gently with a spatula, until golden and the cheese is fully melted.",
        "Cut diagonally and serve immediately with a simple salad or pickle.",
      ],
    },
    {
      slug:     "morning-mist-bruschetta",
      title:    "Morning Mist Honey Bruschetta",
      category: "Appetiser",
      time:     "12 mins",
      servings: 4,
      image:    "assets/images/recipe-4.svg",
      intro:    "Light, fresh, and absolutely gorgeous on a plate. These little bites disappear fast at every gathering.",
      ingredients: [
        "1 baguette, sliced diagonally and toasted",
        "150g Morning Mist chèvre",
        "3 tbsp raw honey",
        "A handful of fresh thyme leaves",
        "A handful of crushed pistachios",
        "A pinch of flaky sea salt",
        "A drizzle of extra virgin olive oil",
      ],
      method: [
        "Toast the baguette slices under a grill or in a toaster until just golden and crisp.",
        "Spread a generous dollop of Morning Mist on each warm toast slice.",
        "Drizzle honey over each piece — be generous, it is meant to drip a little.",
        "Scatter fresh thyme leaves and crushed pistachios over the top.",
        "Finish with a tiny pinch of flaky sea salt and a light drizzle of olive oil.",
        "Serve immediately on a board. Best eaten within minutes while the toast is still crisp.",
      ],
    },
  ],

  /* ─── SOCIAL MEDIA ─── */
  social: [
    { label: "Instagram", url: "https://www.instagram.com/thesleepingcatfarm/",  icon: "instagram.svg" },
    { label: "WhatsApp", url: "https://wa.me/917972933043",  icon: "whatsapp.svg" },
  ],

  /* ─── GOOGLE MAPS ─── */
  map: {
    enabled: true,
    lat:     18.35807379854526,
    lng:     74.03269111604936,
    zoom:    15,
    label:   "Find Us",
    title:   'Visit The<br><em>Sleeping Cat Farm</em>',
    desc:    "Come see where the magic happens. We welcome visitors every weekend from 10 AM to 4 PM.",
    address: "The Sleeping Cat Farm, Mumbai, Maharashtra",
    apiKey:  "YOUR_GOOGLE_MAPS_API_KEY_HERE",
  },

  /* ─── CONTACT ─── */
  contact: {
    email:   "thesleepingcatfarm@gmail.com",
    phone:   "+91 79729 33043",
    address: "The Sleeping Cat Farm, Maharashtra, India",
  },

  /* ─── FOOTER ─── */
  footer: {
    columns_1: [
      {
        heading: "Explore",
        links: [
          { label: "Our Cheese",        href: "#collection"         },
          { label: "Our Story",         href: "#story"              },
          { label: "How We Make It",    href: "#process"            },
          { label: "Signature Wheel",   href: "#featured"           },
          { label: "Recipes",               href: "pages/recipes.html"           },
          { label: "Subscription",          href: "pages/subscription.html"      },
        ],
      },
    ],
    columns_2: [
      {
        heading: "Visit",
        links: [
          { label: "Events &amp; Workshops", href: "pages/events.html"            },
        ],
      },
    ],
    copyright: "© 2025 The Sleeping Cat Farm. All rights reserved.",
  },
};