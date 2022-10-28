const attractions = [
  // adventure
  {
    name: 'Skyline Rotorua',
    slug: 'skyline-rotorua',
    location: 'rotorua',
    description:
      'Rotorua Luge, Gondola, Buffet & More – Skyline Deals & Discounts from Rotorua Super Passes. We have your Skyline combo deals covered, whether you’re looking for thrills as you luge Rotorua, see the sights from the Skyline Gondola, indulge in the Stratosfare Skyline buffet, or do it all! Choose one of our Skyline deals or pair with any of our other great Rotorua Activity Packages on offer. Save money and don’t miss a thing with one easy pass.',
    hero: '/images/hero/skyline-rotorua.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.279478570671!2d176.2197803153273!3d-38.11043197969978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c27b62116b577%3A0x456085ce2384f5df!2sSkyline%20Rotorua!5e0!3m2!1sen!2snz!4v1666821562218!5m2!1sen!2snz',
    activity: 'adventure',
    image: '/images/attractions/skyline-rotorua.jpg'
  },
  {
    name: 'Rotorua Canopy Tours',
    slug: 'rotorua-canopy-tours',
    location: 'rotorua',
    description:
      'This is the ultimate Rotorua ziplining adventure – higher, longer and more spectacular than the award-winning Original Canopy Tour. Journey deeper into untouched native forest and experience New Zealand like it once was. Not for the faint of heart, this Rotorua ziplining experience is a step up in adventure level and incorporates some incredible new features that will blow you away.',
    hero: '/images/hero/rotorua-canopy-tours.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.250266503984!2d176.22198421532738!3d-38.11111167969953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c270d5471c8dd%3A0xa29c5de61748d0e9!2sRotorua%20Canopy%20Tours!5e0!3m2!1sen!2snz!4v1666901506055!5m2!1sen!2snz',
    activity: 'adventure',
    image: '/images/attractions/canopy.jpg'
  },
  {
    name: 'Off Road NZ',
    slug: 'off-road-nz',
    location: 'rotorua',
    description:
      'Off Road NZ prides itself in running a professional, safe operation with a focus on providing guests with a first class, high adventure, action packed experience. Our Rotorua adventure activities include Raceline Karting, Monster 4X4 Thrill Rides and 4WD Bush Safaris.',
    hero: '/images/hero/off-road-nz.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.228063921866!2d176.04434881532603!3d-38.065069479707724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c306138cf3271%3A0xecc104108ab6cb6!2sOff%20Road%20NZ!5e0!3m2!1sen!2snz!4v1666918629727!5m2!1sen!2snz',
    activity: 'adventure',
    image: '/images/attractions/off-road-nz.jpg'
  },

  {
    name: 'Velocity Valley',
    slug: 'velocity-valley',
    location: 'rotorua',
    description:
      'Founded in 1998, Velocity Valley is New Zealand’s leading adventure hub, offering the world’s most exciting and unique activities ranging from a low to high adrenaline buzz in one beautiful location in Rotorua.',
    hero: '/images/hero/velocity-valley.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.275862377519!2d176.18855691532667!3d-38.087242179703736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c261f6714892d%3A0xd3d1a1585da7377d!2sVelocity%20Valley%20Adrenaline%20Park!5e0!3m2!1sen!2snz!4v1666918687263!5m2!1sen!2snz',
    activity: 'adventure',
    image: '/images/attractions/velocity-valley.jpg'
  },
  // cultural experience
  {
    name: 'Te Puia',
    slug: 'te-puia',
    location: 'rotorua',
    description:
      'Featuring dramatic geysers, bubbling mud, and beautiful native bush explored by our personalised guided tours. Te Puia is home to the New Zealand Māori Arts and Crafts Institute and offers a state-of-the-art Kiwi Conservation Centre, so you can get closer than ever before to New Zealand’s national treasure- the Native Kiwi.',
    hero: '/images/hero/te-puia.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.99683909381!2d176.2464091269531!3d-38.163513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6e9debd23c0e05%3A0x5057a1e6b872d49f!2sTe%20Puia%20-%20Rotorua%2C%20NZ!5e0!3m2!1sen!2snz!4v1666919009773!5m2!1sen!2snz',
    activity: 'cultural experience',
    image: '/images/attractions/te-puia.jpg'
  },
  {
    name: 'Whakarewarewa Thermal Village',
    slug: 'whakarewarewa-thermal-village',
    location: 'rotorua',
    description:
      'Enter Te Whakarewarewa Valley and experience the unique Māori culture and heritage of the village. Our Living Māori Village is owned and operated by local residents, providing an intimate look into day-to-day life in a Living Māori Village.',
    hero: '/images/hero/whakarewarewa-thermal-village.jpeg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.9942991449557!2d176.2523999653289!3d-38.16357202969051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c2757fc1bc097%3A0x93ecd87e0a8cf8d7!2sWhakarewarewa%20-%20The%20Living%20Maori%20Village!5e0!3m2!1sen!2snz!4v1666919113697!5m2!1sen!2snz',
    activity: 'cultural experience',
    image: '/images/attractions/whakarewarewa-thermal-village.jpeg'
  },
  //Sightseeing
  {
    name: 'Rotorua Duck Tours',
    slug: 'rotorua-duck-tours',
    location: 'rotorua',
    description:
      'Experience the thrill of riding in New Zealand’s only genuine operating WW2 landing crafts and seeing beautiful scenery en route, it promises to be a real highlight of your time in Rotorua.',
    hero: '/images/hero/rotorua-duck-tours.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.106617610556!2d176.2513595153281!3d-38.137713779695005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c277e846f09a3%3A0x137a6f7d9cd3e51b!2sRotorua%20Duck%20Tours!5e0!3m2!1sen!2snz!4v1666919245494!5m2!1sen!2snz',
    activity: 'sightseeing',
    image: '/images/attractions/rotorua-duck-tours.jpg'
  },
  {
    name: 'Ernest Kemp',
    slug: 'ernest-kemp',
    location: 'taupo',
    description:
      'Take a relaxing boat trip aboard The Ernest Kemp, the Māori Rock Carvings Cruise Specialists. One of the world’s largest freshwater volcanic craters, Lake Taupō is home to the famous Māori Rock Carvings, only accessible by boat. With comfortable seating inside and out, be sure to have your camera ready, and enjoy this piece of spiritual and cultural significance of the lake on our replica steamboat.',
    hero: '/images/hero/ernest-kemp.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.3559293964354!2d176.06297201534412!3d-38.68666767960364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6bf0c387259a0d%3A0x4c16f2252d018392!2sErnest%20Kemp%20Cruises!5e0!3m2!1sen!2snz!4v1666919376919!5m2!1sen!2snz',
    activity: 'sightseeing',
    image: '/images/attractions/ernest-kemp.jpg'
  },

  //Thermal
  {
    name: 'Waimangu Volcanic Valley',
    slug: 'waimangu-volcanic-valley',
    location: 'rotorua',
    description:
      'Connecting people with the beating heart of the world’s youngest geothermal valley, its unique history and legacy. We share how the world began! Experience spectacular volcanic craters, enormous hot water springs, beautiful geothermal features, rare and unusual plant life, brilliantly coloured micro biology and a wide array of birds..',
    hero: '/images/hero/waimangu.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.751454439832!2d176.38407031533237!3d-38.285253979669726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6ea2f269e135d7%3A0x41ec1696f066fe5a!2sWaimangu%20Volcanic%20Valley!5e0!3m2!1sen!2snz!4v1666919428225!5m2!1sen!2snz',
    activity: 'thermal',
    image: '/images/attractions/waimangu.jpg'
  },
  // scenic flights
  {
    name: 'Taupo Floatplane',
    slug: 'taupo-floatplane',
    location: 'taupo',
    description:
      'As one of NZ’s leading air activities, Taupo’s Floatplane offers a range of flights around the vibrant Taupo and Tongariro National Park areas. We can even drop you and your partner off on a secluded beach for an hour or two of hiking, beach combing or simply just relaxing. Or what about… popping the question to the love of your life?',
    hero: '/images/hero/taupo-floatplane.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.2985781660877!2d176.0623609153442!3d-38.68798527960346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6bf0c3d46b34df%3A0xcf7887a08d720c4a!2sTaupo&#39;s%20Floatplane!5e0!3m2!1sen!2snz!4v1666921921181!5m2!1sen!2snz',
    activity: 'scenic flights',
    image: '/images/attractions/floatplane.jpg'
  },
  {
    name: 'Volcanic Air',
    slug: 'volcanic-air',
    location: 'rotorua',
    description:
      'Based on the shores of Lake Rotorua, Volcanic Air offers the most comprehensive range of scenic flights and air tours in the region. Established in 1992, we carry over 10,000 satisfied customers per year to experience our local volcanoes, geothermal reserves and lakes district from both the air and the ground. Volcanic Air operate a mixed fleet of both helicopters and Rotorua’s only floatplanes.',
    hero: '/images/hero/volcanic-air.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.44765802604!2d176.2500534153279!3d-38.129782579696226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c277f9af862db%3A0x305334940ed907b4!2sVolcanic%20Air!5e0!3m2!1sen!2snz!4v1666919618065!5m2!1sen!2snz',
    activity: 'scenic flights',
    image: '/images/attractions/volcanic-air.jpg'
  },
  //Spa
  {
    name: 'Polynesian Spa',
    slug: 'polynesian-spa',
    location: 'rotorua',
    description:
      'Nestled on the shores of Lake Rotorua lies Polynesian Spa – a geothermal bathing and soul-soothing retreat, where you can experience wellness sourced from Rotorua’s very own backyard.',
    hero: '/images/hero/polynesian-spa.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.09883823615!2d176.2560327153281!3d-38.137894679695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6e9d870e2ef5b1%3A0xc26182040f5be75!2sPolynesian%20Spa!5e0!3m2!1sen!2snz!4v1666919851152!5m2!1sen!2snz',
    activity: 'spa',
    image: '/images/attractions/polynesian-spa.jpg'
  },
  //Parks
  {
    name: 'Paradise Valley Springs',
    slug: 'paradise-valley-springs',
    location: 'rotorua',
    description:
      'We are an all weather attraction, suitable for all age groups, wildlife on display is found either wild (both native and introduced) or farmed around New Zealand - with the exception of our African lion pride and for this reason the lions are housed and displayed in a slightly separate area of the park.',
    hero: '/images/hero/paradise-valley-springs.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.25162475536!2d176.149578415328!3d-38.134341679695616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c24495dc9631b%3A0x9813b4af0e5cac0a!2sParadise%20Valley%20Springs!5e0!3m2!1sen!2snz!4v1666919895165!5m2!1sen!2snz',
    activity: 'parks',
    image: '/images/attractions/paradise-valley-springs.jpg'
  }
]

export default attractions
