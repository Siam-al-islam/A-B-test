const ID = 'FRO-001';

const dataIds = ['47003359871310','47003363836238','47003361804622','39736262361171'];
const allProducts = document.querySelectorAll('.product-item');

allProducts.forEach((item)=> {
   const anchor = item.querySelector('a.product-item__link');
   const href = anchor.getAttribute('href');
   const splitHref = href.split('?variant=')
  const variantId = splitHref[1];

    if(dataIds.includes(variantId)){
        item.style.border = "5px solid green";
    }
})
