var addItemId = 0;
function addToCart(item){
    addItemId+=1
  var selectedItem = document.createElement('div');
      selectedItem.classList.add('cartImg');
      selectedItem.setAttribute('id',addItemId );
  var img = document.createElement('img');
      img.setAttribute('src',item.children[0].currentSrc);
      selectedItem.append(img);
  var title = document.createElement('div');
      title.innerText = item.children[1].innerText;
  var lable = document.createElement('div');
      lable.innerText = item.children[2].children[0].innerText;
  var select = document.createElement('span');
      select.innerText = item.children[2].children[1].value;
      var delBtn = document.createElement('button');
         delBtn.innerText = 'delete';
         delBtn.setAttribute('onclick','del('+addItemId+')');
      lable.append(select);
      lable.append(delBtn);
      selectedItem.append(title);
      selectedItem.append(lable);
  var cartItems = document.getElementById('title')
      cartItems.append(selectedItem);
}
function del(item){ 
    document.getElementById(item).remove();
}