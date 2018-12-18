$(document).ready(function() {
  $.get('/products', function(res) {
    let products = res;
    products.cakes.forEach(cake => {
      addProduct(cake, "#cakes")
    })
    products.cookies.forEach(cookie => {
      addProduct(cookie, '#cookies')
    })
  })
})

function addProduct(product, element){
  //build card
  let $col = $('<div>')
      .addClass('col-6 col-md-4 col-lg-3 mb-5');

  let $card = $('<div>')
      .addClass('card');
  if (element === '#cakes'){
    $card.addClass('h-100')
  }
  let $img = $('<img>')
      .addClass('card-img-top')
      .attr('src', `assets/images/${product.image}`)
      .attr('alt', product.name);

  let $title = $('<h5>')
      .addClass('card-title pl-1 mt-1')
      .text(product.name);

  let $description = $('<p>')
      .addClass('card-text text-justify pl-3 pr-3 mb-auto')
      .text(product.description);

  //check of flavor of the month and add header

  if(product.month) {
    let $header = $('<div>')
        .addClass('card-header')
        .text('Flavor of the Month:')
    $card.addClass('featured')
    $card.append($header)
  }

  $card.append($img, $title, $description);

  $col.append($card);

  //check for notes and add to card

  if (product.note) {
    let $note = $('<p>')
        .addClass('card-text ml-3')
        .text(product.note)
    let $hr = $('<hr>')
    $card.append($hr, $note);
  }

  //make sure featured product first
  if (product.month) $(element).prepend($col)
  else $(element).append($col);


}
