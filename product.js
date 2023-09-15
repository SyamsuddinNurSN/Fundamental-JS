class Product {
    name = ""
    price = ""  
      
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
    
  class Transaction {
    
    constructor() {
      this.total = 0;
      this.product = [];
    }
  
    
    addToCart(product, qty) {
      
      this.product.push(product);
      
      this.total += product.price * qty;
    }
  
    showTotal() {
      
      return this.total;
    }
  
    
    checkout() {
    
      return {
        total: this.total,
        product: this.product,
      };
    }
  }
  
  let p1 = new Product("Apple", 10);
  let p2 = new Product("Banana", 5);
  let p3 = new Product("Orange", 8);
  
  
  let t1 = new Transaction();
  
  
  t1.addToCart(p1, 2); // Add 2 apples
  t1.addToCart(p2, 3); // Add 3 bananas
  t1.addToCart(p3, 1); // Add 1 orange
  
  console.log(t1.showTotal());
  
  
  let data = t1.checkout();
  console.log(data); 
  