const attractions = [
  // adventure
  {
    name: 'Skyline Rotorua',
    slug: 'skyline-rotorua',
    description:
      'Proin faucibus arcu quis ante. Nulla sit amet est. Quisque rutrum. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Vivamus quis mi.',
    hero: '/images/attractions/skyline-rotorua.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.279478570671!2d176.2197803153273!3d-38.11043197969978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c27b62116b577%3A0x456085ce2384f5df!2sSkyline%20Rotorua!5e0!3m2!1sen!2snz!4v1666821562218!5m2!1sen!2snz',
    activity: 'adventure',
    image: '/images/attractions/skyline-rotorua.jpg'
  },
  {
    name: 'Rotorua Canopy Tours',
    slug: 'rotorua-canopy-tours',
    description:
      'Proin faucibus arcu quis ante. Nulla sit amet est. Quisque rutrum. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Vivamus quis mi.',
    hero: '/images/attractions/canopy.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.279478570671!2d176.2197803153273!3d-38.11043197969978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c27b62116b577%3A0x456085ce2384f5df!2sSkyline%20Rotorua!5e0!3m2!1sen!2snz!4v1666821562218!5m2!1sen!2snz',
    activity: 'adventure',
    image: '/images/attractions/canopy.jpg'
  },
  {
    name: 'Off Road NZ',
    slug: 'off-road-nz',
    description:
      'Proin faucibus arcu quis ante. Nulla sit amet est. Quisque rutrum. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Vivamus quis mi.',
    hero: '/images/attractions/off-road.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.279478570671!2d176.2197803153273!3d-38.11043197969978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c27b62116b577%3A0x456085ce2384f5df!2sSkyline%20Rotorua!5e0!3m2!1sen!2snz!4v1666821562218!5m2!1sen!2snz',
    activity: 'adventure',
    image: '/images/attractions/off-road.jpg'
  },

  {
    name: 'Velocity Valley',
    slug: 'velocity-valley',
    description:
      'Proin faucibus arcu quis ante. Nulla sit amet est. Quisque rutrum. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Vivamus quis mi.',
    hero: '/images/attractions/velocity-valley.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.279478570671!2d176.2197803153273!3d-38.11043197969978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c27b62116b577%3A0x456085ce2384f5df!2sSkyline%20Rotorua!5e0!3m2!1sen!2snz!4v1666821562218!5m2!1sen!2snz',
    activity: 'adventure',
    image: '/images/attractions/velocity-valley.jpg'
  },
  // cultural experience
  {
    name: 'Te Puia',
    slug: 'te-puia',
    description:
      'Proin faucibus arcu quis ante. Nulla sit amet est. Quisque rutrum. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Vivamus quis mi.',
    hero: '/images/attractions/te-puia.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.279478570671!2d176.2197803153273!3d-38.11043197969978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c27b62116b577%3A0x456085ce2384f5df!2sSkyline%20Rotorua!5e0!3m2!1sen!2snz!4v1666821562218!5m2!1sen!2snz',
    activity: 'cultural experience',
    image: '/images/attractions/te-puia.jpg'
  },
  {
    name: 'Whakarewarewa Thermal Village',
    slug: 'whakarewarewa-thermal-village',
    description:
      'Proin faucibus arcu quis ante. Nulla sit amet est. Quisque rutrum. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Vivamus quis mi.',
    hero: '/images/attractions/whakarewarewa-thermal-village.jpeg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.279478570671!2d176.2197803153273!3d-38.11043197969978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c27b62116b577%3A0x456085ce2384f5df!2sSkyline%20Rotorua!5e0!3m2!1sen!2snz!4v1666821562218!5m2!1sen!2snz',
    activity: 'cultural experience',
    image: '/images/attractions/whakarewarewa-thermal-village.jpeg'
  },

  //Sightseeing
  {
    name: 'Rotorua Duck Tours',
    slug: 'rotorua-duck-tours',
    description:
      'Proin faucibus arcu quis ante. Nulla sit amet est. Quisque rutrum. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Vivamus quis mi.',
    hero: '/images/attractions/rotorua-duck-tours.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.279478570671!2d176.2197803153273!3d-38.11043197969978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c27b62116b577%3A0x456085ce2384f5df!2sSkyline%20Rotorua!5e0!3m2!1sen!2snz!4v1666821562218!5m2!1sen!2snz',
    activity: 'sightseeing',
    image: '/images/attractions/rotorua-duck-tours.jpg'
  },
  {
    name: 'Ernest Kemp',
    slug: 'ernest-kemp',
    description:
      'Proin faucibus arcu quis ante. Nulla sit amet est. Quisque rutrum. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Vivamus quis mi.',
    hero: '/images/attractions/ernest-kemp.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.279478570671!2d176.2197803153273!3d-38.11043197969978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c27b62116b577%3A0x456085ce2384f5df!2sSkyline%20Rotorua!5e0!3m2!1sen!2snz!4v1666821562218!5m2!1sen!2snz',
    activity: 'sightseeing',
    image: '/images/attractions/ernest-kemp.jpg'
  },

  //Thermal
  {
    name: 'Waimangu Volcanic Valley',
    slug: 'waimangu-volcanic-valley',
    description:
      'Proin faucibus arcu quis ante. Nulla sit amet est. Quisque rutrum. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Vivamus quis mi.',
    hero: '/images/attractions/waimangu.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.279478570671!2d176.2197803153273!3d-38.11043197969978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c27b62116b577%3A0x456085ce2384f5df!2sSkyline%20Rotorua!5e0!3m2!1sen!2snz!4v1666821562218!5m2!1sen!2snz',
    activity: 'thermal',
    image: '/images/attractions/waimangu.jpg'
  },

  // scenic flights
  {
    name: 'Taupo Floatplane',
    slug: 'taupo-floatplane',
    description:
      'Proin faucibus arcu quis ante. Nulla sit amet est. Quisque rutrum. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Vivamus quis mi.',
    hero: '/images/attractions/floatplane.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.279478570671!2d176.2197803153273!3d-38.11043197969978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c27b62116b577%3A0x456085ce2384f5df!2sSkyline%20Rotorua!5e0!3m2!1sen!2snz!4v1666821562218!5m2!1sen!2snz',
    activity: 'scenic flights',
    image: '/images/attractions/floatplane.jpg'
  },
  {
    name: 'Volcanic Air',
    slug: 'volcanic-air',
    description:
      'Proin faucibus arcu quis ante. Nulla sit amet est. Quisque rutrum. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Vivamus quis mi.',
    hero: '/images/attractions/volcanic-air.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.279478570671!2d176.2197803153273!3d-38.11043197969978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c27b62116b577%3A0x456085ce2384f5df!2sSkyline%20Rotorua!5e0!3m2!1sen!2snz!4v1666821562218!5m2!1sen!2snz',
    activity: 'scenic flights',
    image: '/images/attractions/volcanic-air.jpg'
  },
  //Spa
  {
    name: 'Polynesian Spa',
    slug: 'polynesian-spa',
    description:
      'Proin faucibus arcu quis ante. Nulla sit amet est. Quisque rutrum. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Vivamus quis mi.',
    hero: '/images/attractions/volcanic-air.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.279478570671!2d176.2197803153273!3d-38.11043197969978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c27b62116b577%3A0x456085ce2384f5df!2sSkyline%20Rotorua!5e0!3m2!1sen!2snz!4v1666821562218!5m2!1sen!2snz',
    activity: 'spa',
    image: '/images/attractions/polynesian-spa.jpg'
  },
  //Parks
  {
    name: 'Paradise Valley Springs',
    slug: 'paradise-valley-springs',
    description:
      'Proin faucibus arcu quis ante. Nulla sit amet est. Quisque rutrum. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Vivamus quis mi.',
    hero: '/images/attractions/paradise-valley-springs.jpg',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.279478570671!2d176.2197803153273!3d-38.11043197969978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c27b62116b577%3A0x456085ce2384f5df!2sSkyline%20Rotorua!5e0!3m2!1sen!2snz!4v1666821562218!5m2!1sen!2snz',
    activity: 'parks',
    image: '/images/attractions/paradise-valley-springs.jpg'
  }
]

export default attractions
