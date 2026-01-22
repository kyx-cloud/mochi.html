// ===== 浮動加入購物車按鈕 =====
document.addEventListener("DOMContentLoaded", () => {

    // 如果頁面沒設定商品，就不顯示
    if (!window.PRODUCT_DATA) return;
  
    // 建立按鈕
    const btn = document.createElement("button");
    btn.className = "floating-cart-btn";
    btn.innerText = "＋";
  
    document.body.appendChild(btn);
  
    btn.onclick = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
      const product = {
        id: window.PRODUCT_DATA.id,
        name: window.PRODUCT_DATA.name,
        price: window.PRODUCT_DATA.price,
        qty: window.PRODUCT_DATA.qty || 1,
        img: window.PRODUCT_DATA.img
      };
  
      const exist = cart.find(p => p.id === product.id);
      if (exist) {
        exist.qty += product.qty;
      } else {
        cart.push(product);
      }
  
      localStorage.setItem("cart", JSON.stringify(cart));
  
      // 回首頁
      window.location.href = "index.html";
    };
  });
  