interface Item {
  label: string;
  content: Array<string>;
}


export const mainRegelwerkData = {
  mainImage: 'https://storage.googleapis.com/arascor_vision/vtview.png',
  name: 'Patryk Hamann',
  authorImage:
    '/owner.png',
  role: 'CEO',
  title: 'Projects',
  titleDesc:
    '"Explore our diverse portfolio of virtual tours and marketing projects across various regions. From immersive virtual tours in Poland and Germany to innovative marketing strategies in Dubai and Croatia, discover how we bring unique experiences and cutting-edge solutions to life for our clients. Join us as we showcase our expertise in creating impactful and engaging content tailored to different markets around the globe."',
  bannerWhiteText: 'Projects:',
  bannerYellowText: 'Virtual-Tours',
  rulesIntroText:
    '',
  rulesEndText:
    '',
};


export const regelwerkRules: Array<Item> = [
  {
    label: 'Poland',
    content: [
      '<a href="https://storage.googleapis.com/arascor_vision/output/index.html" target="_blank"><img src="https://storage.googleapis.com/arascor_vision/output/preview.jpg" alt="Villa Mare" style="max-width: 100%; height: auto; border-radius: 5px; margin: 10px 0;" /></a>',
      'TESTTEST',
    ],
  },
  {
    label: 'Germany',
    content: [
      'TESTTEST',
    ],
  },
  {
    label: 'Dubai',
    content: [
      'TESTTEST',
    ],
  },
  {
    label: 'Croatia',
    content: [
      'TESTTEST',
    ],
  },
];
