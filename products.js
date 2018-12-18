const products = {
  cakes: [
    {
      name: "Double Dark Chocolate",
      description: "Rich dark chocolate cake with super fudgy frosting.",
      image: "choc.jpg",
      hide: false,
      month: false
    },{
      name: "Black & Tan",
      description: "Malty chocolate stout cake with salted beer caramel buttercream and pretzel or chocolate malt ball.",
      image: "bandt.jpg",
      hide: false,
      month: false
    },{
      name: "Black Forest",
      description: "Chocolate almond cake with cherry jam filling, kirschwasser buttercream, dark chocolate shavings and candied cherry.",
      image: "black.jpg",
      hide: false,
      month: false
    },{
      name: "Vegan Coconut",
      description: "Tender coconut cake with coconut “cream cheeze” frosting and coconut flakes.",
      image: "coconut.jpg",
      vegan: true,
      note: 'Can also be made with dairy on request',
      hide: false,
      month: false
    },{
      name: "Birthday",
      description: "Confetti cake with vanilla or milk chocolate buttercream and cereal sprinkle.",
      image: "birthday.jpg",
      hide: false,
      month: false
    },{
      name: "Gluten Free Pumpkin Cream Cheese",
      description: "Pumpkin cupcake with cream cheese frosting and cinnamon sugar sprinkle.",
      image: "pumpkin.jpg",
      glutenFree: true,
      note: "Can also be made with wheat on request",
      hide: false,
      month: false
    },{
      name: "Peppermint Chocolate",
      description: "Mint chocolate cake with peppermint buttercream swirl.",
      image: "pep.jpg",
      hide: false,
      month: true,
    },
  ],
  cookies: [{
      name: "Pink Velvet Sandwiches",
      subtitle: "Cream Cheese Filling",
      image: "pinkvelvet.jpg"
    },{
      name: "Salted Chocolate Chip",
      image: "cchip.jpg"
    },{
      name: "Peanut Butter M&M",
      image: "pbmandm.jpg"
    },{
      name: "Snickerdoodle",
      image: "cchip.jpg"
    },{
      name: "Gluten-Free Polish Amaretti",
      image: "amaretti.jpg",
      glutenFree: true
    },{
      name: "Ginger Molasses Oat",
        image: "cchip.jpg",
        note: 'Add brewer’s yeast free of charge for THE BEST lactation cookie!)'
    },
  ]
}

module.exports = products;
