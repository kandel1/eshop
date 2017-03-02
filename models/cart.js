module.exports= function Cart(oldCart){ //passing previous items to check the if same or not
    this.items= oldCart.items|| {} ;
    this.totalQty=oldCart.totalQty || 0;
    this.totalPrice=oldCart.totalPrice || 0;

    this.add= function(item, id){ //if there is same thing with large quantity then it is checked here throug initItems
        var storedItem = this.items[id];
        if(!storedItem){ //if items is not previous item
            storedItem= this.items[id]={item: item, qty:0, price:0};
        }
        storedItem.qty++;
        storedItem.price= storedItem.item.price*storedItem.qty;
        this.totalQty++;
        this.totalPrice+= storedItem.item.price ;

    }

    this.generateArray = function(){// the data are currently in object so if we have to to make list we should generate generateArray
        var arr = [];
        for( var id in this.items){
            arr.push(this.items[id]);
        }
        return arr;
    };
};