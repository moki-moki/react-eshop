const products = [
  {
    name: "Gundam",
    imageUrl:
      "https://images.unsplash.com/photo-1612400200754-bb6f8154e1fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt purus quis congue efficitur. Mauris a aliquet enim. Sed pulvinar faucibus eros eget aliquam. Proin vel aliquet justo. Pellentesque dapibus non libero in condimentum. Duis ac suscipit nisl. Nulla nec dolor nisi. Aenean sed viverra ante. Morbi vel risus id ex elementum aliquam. In euismod cursus purus a egestas.",
    price: 999.99,
    inStock: 2,
    cat: "random",
  },
  {
    name: "Mug",
    imageUrl:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt purus quis congue efficitur. Mauris a aliquet enim. Sed pulvinar faucibus eros eget aliquam. Proin vel aliquet justo. Pellentesque dapibus non libero in condimentum. Duis ac suscipit nisl. Nulla nec dolor nisi. Aenean sed viverra ante. Morbi vel risus id ex elementum aliquam. In euismod cursus purus a egestas.",
    price: 20,
    inStock: 100,
    cat: "house-accessories",
  },
  {
    name: "Pillow",
    imageUrl:
      "https://images.unsplash.com/photo-1562073623-11c9b415d294?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1071&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt purus quis congue efficitur. Mauris a aliquet enim. Sed pulvinar faucibus eros eget aliquam. Proin vel aliquet justo. Pellentesque dapibus non libero in condimentum. Duis ac suscipit nisl. Nulla nec dolor nisi. Aenean sed viverra ante. Morbi vel risus id ex elementum aliquam. In euismod cursus purus a egestas.",
    price: 52,
    inStock: 5,
    cat: "house-accessories",
  },
  {
    name: "Chair",
    imageUrl:
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt purus quis congue efficitur. Mauris a aliquet enim. Sed pulvinar faucibus eros eget aliquam. Proin vel aliquet justo. Pellentesque dapibus non libero in condimentum. Duis ac suscipit nisl. Nulla nec dolor nisi. Aenean sed viverra ante. Morbi vel risus id ex elementum aliquam. In euismod cursus purus a egestas.",
    price: 100,
    inStock: 5,
    cat: "furniture",
  },
  {
    name: "Sofa",
    imageUrl:
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description:
      "Maecenas sed dui sodales dolor sollicitudin auctor vel vitae lorem. Nulla facilisi. Donec libero sapien, lobortis a cursus vel, bibendum ac elit. In dapibus lacus non dolor eleifend, in elementum lectus finibus. Duis quam tellus, suscipit ut nisl in, dictum tincidunt ligula. Vivamus maximus a mauris vel maximus. Sed mattis vel felis eu sagittis. In eget rhoncus justo, sit amet cursus tortor. Fusce posuere justo id elit egestas pretium. Morbi leo purus, feugiat vitae varius ut, rutrum sit amet leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    price: 400,
    inStock: 10,
    cat: "furniture",
  },
  {
    name: "Bike",
    imageUrl:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description:
      "Quisque ac sem a est porta accumsan id nec libero. Nulla interdum nulla quis massa mattis, non congue mi feugiat. Aenean mi odio, scelerisque imperdiet purus in, consequat blandit dolor. Nulla facilisi. Nulla sed neque quis purus tempor laoreet. Ut ipsum libero, semper sit amet lorem et, consequat tempor magna. Aenean feugiat consequat nulla in dictum. Phasellus sollicitudin tristique accumsan. Vivamus fermentum tincidunt nibh in ullamcorper. Aliquam erat volutpat. Donec ac blandit libero.",
    price: 250,
    inStock: 23,
    cat: "ride",
  },
  {
    name: "Headphones",
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    description:
      "Proin vehicula feugiat condimentum. Donec dignissim faucibus nisi eget feugiat. Vestibulum pellentesque posuere nisl, sodales porttitor felis ultrices sed. Duis quis ultrices mauris, vitae blandit odio. Nullam congue interdum risus. Sed vitae sodales lorem. Quisque pharetra ante vitae magna pharetra, sit amet vestibulum elit rutrum. Praesent vitae erat ex. Curabitur nec venenatis massa. Suspendisse sit amet tellus iaculis, mollis purus eu, scelerisque mauris. Integer et imperdiet urna. Aliquam a elit in massa posuere sollicitudin at in leo. In in augue bibendum, bibendum mauris nec, tristique nulla. Cras ac tellus eros. Integer iaculis, leo eget ultricies ornare, diam leo pulvinar neque, vitae tristique nisi ante ut ante.",
    price: 75,
    inStock: 40,
    cat: "tech",
  },
  {
    name: "Pen",
    imageUrl:
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=623&q=80",
    description:
      "Proin vehicula feugiat condimentum. Donec dignissim faucibus nisi eget feugiat. Vestibulum pellentesque posuere nisl, sodales porttitor felis ultrices sed. Duis quis ultrices mauris, vitae blandit odio. Nullam congue interdum risus. Sed vitae sodales lorem. Quisque pharetra ante vitae magna pharetra, sit amet vestibulum elit rutrum. Praesent vitae erat ex. Curabitur nec venenatis massa. Suspendisse sit amet tellus iaculis, mollis purus eu, scelerisque mauris. Integer et imperdiet urna. Aliquam a elit in massa posuere sollicitudin at in leo. In in augue bibendum, bibendum mauris nec, tristique nulla. Cras ac tellus eros. Integer iaculis, leo eget ultricies ornare, diam leo pulvinar neque, vitae tristique nisi ante ut ante.",
    price: 25,
    inStock: 72,

    cat: "house-accessories",
  },
  {
    name: "Book",
    imageUrl:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    description:
      "Proin vehicula feugiat condimentum. Donec dignissim faucibus nisi eget feugiat. Vestibulum pellentesque posuere nisl, sodales porttitor felis ultrices sed. Duis quis ultrices mauris, vitae blandit odio. Nullam congue interdum risus. Sed vitae sodales lorem. Quisque pharetra ante vitae magna pharetra, sit amet vestibulum elit rutrum. Praesent vitae erat ex. Curabitur nec venenatis massa. Suspendisse sit amet tellus iaculis, mollis purus eu, scelerisque mauris. Integer et imperdiet urna. Aliquam a elit in massa posuere sollicitudin at in leo. In in augue bibendum, bibendum mauris nec, tristique nulla. Cras ac tellus eros. Integer iaculis, leo eget ultricies ornare, diam leo pulvinar neque, vitae tristique nisi ante ut ante.",
    price: 63,
    inStock: 10,

    cat: "house accessories",
  },
  {
    name: "Lamp",
    imageUrl:
      "https://images.unsplash.com/photo-1542728928-1413d1894ed1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt purus quis congue efficitur. Mauris a aliquet enim. Sed pulvinar faucibus eros eget aliquam. Proin vel aliquet justo. Pellentesque dapibus non libero in condimentum. Duis ac suscipit nisl. Nulla nec dolor nisi. Aenean sed viverra ante. Morbi vel risus id ex elementum aliquam. In euismod cursus purus a egestas.",
    price: 42,
    inStock: 50,

    cat: "house-accessories",
  },
  {
    name: "Water Bottle",
    imageUrl:
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
    description:
      "enean accumsan quam libero, luctus hendrerit magna lacinia at. Aenean quam turpis, accumsan eget justo sed, posuere porttitor urna. Suspendisse a urna et nulla eleifend blandit consectetur in justo. Vivamus et orci id nibh pharetra ullamcorper sit amet et ante. Aliquam eu turpis sit amet est ultrices venenatis.",
    price: 39.99,
    inStock: 4,
    cat: "random",
  },
  {
    name: "Electric Kelly Guitar",
    imageUrl:
      "https://images.unsplash.com/photo-1550985616-10810253b84d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=671&q=80",
    description:
      "Vivamus in nulla dictum, mattis nisl a, tincidunt odio. Mauris in vulputate ante, at semper ipsum. Nulla hendrerit purus ex. Proin facilisis, odio sed consequat porttitor, ligula est tempor nibh, non vehicula mi enim quis quam.",
    price: 400.99,
    inStock: 7,
    cat: "tech",
  },
  {
    name: "Camera",
    imageUrl:
      "https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    description:
      "Aenean accumsan quam libero, luctus hendrerit magna lacinia at. Aenean quam turpis, accumsan eget justo sed, posuere porttitor urna. Suspendisse a urna et nulla eleifend blandit consectetur in justo. Vivamus et orci id nibh pharetra ullamcorper sit amet et ante.",
    price: 199.99,
    inStock: 23,
    cat: "tech",
  },
  {
    name: "Guitar Amp",
    imageUrl:
      "https://images.unsplash.com/photo-1583236753467-456b21f4a1ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description:
      "Phasellus nec sodales enim, nec luctus neque. In ac lacus interdum, accumsan ante quis, euismod nibh. Aliquam eget sagittis nibh. Suspendisse ex augue, efficitur eget vestibulum non, convallis quis neque.",
    price: 200.99,
    inStock: 30,
    cat: "tech",
  },
  {
    name: "Bookshelf",
    imageUrl:
      "https://images.unsplash.com/photo-1623276234990-c74be03fd36a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    description:
      "Proin eros quam, egestas ut felis imperdiet, malesuada ultricies risus. Aenean malesuada justo sapien. Fusce in libero vehicula, pellentesque felis non, dictum sapien.",
    price: 50.0,
    inStock: 17,

    cat: "furniture",
  },
  {
    name: "Picture Frame",
    imageUrl:
      "https://images.unsplash.com/photo-1551373884-8a0750074df7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description:
      "Aliquam fringilla, velit vitae tincidunt pretium, nibh ante rutrum risus, eu facilisis lacus nisl vitae eros. Aenean mattis pretium lectus sit amet convallis. Morbi volutpat turpis magna, a sollicitudin tortor suscipit in.",
    price: 15.99,
    inStock: 15,

    cat: "house-accessories",
  },
  {
    name: "Microphone",
    imageUrl:
      "https://images.unsplash.com/photo-1581548708095-7158f2e63857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description:
      "Vestibulum sapien augue, interdum at est nec, ultrices rutrum nisl. Duis nec lectus vitae ipsum lacinia elementum vitae eu purus. Aliquam sit amet arcu vitae mauris fermentum suscipit vel eget urna. Nunc consequat tincidunt consectetur. Sed non facilisis urna, at molestie purus.",
    price: 198.99,
    inStock: 14,
    cat: "tech",
  },
  {
    name: "Bird Cage",
    imageUrl:
      "https://images.unsplash.com/photo-1592487547379-5cfadfada28d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    description:
      "Vestibulum lorem enim, tincidunt commodo porta aliquet, efficitur vitae nibh. Maecenas est diam, vehicula quis odio ut, tristique feugiat nisi. Pellentesque maximus lacus a orci sagittis rhoncus. Nulla vel nibh vel magna porttitor dictum ut ac risus.",
    price: 89.99,
    inStock: 8,
    cat: "random",
  },
  {
    name: "Stone",
    imageUrl:
      "https://images.unsplash.com/photo-1481015771284-59ea3dee95af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=676&q=80",
    description:
      "Mauris in vulputate ante, at semper ipsum. Nulla hendrerit purus ex. Proin facilisis, odio sed consequat porttitor, ligula est tempor nibh, non vehicula mi enim quis quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed dapibus condimentum nunc vitae rhoncus. Sed suscipit est eu ornare efficitur. Nulla facilisi.",
    price: 9999.99,
    inStock: 1,
    cat: "random",
  },
];

module.exports = products;
