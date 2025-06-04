document.addEventListener("DOMContentLoaded", () => {
    let products = document.getElementById("products")
    let carItems = document.querySelector(".cart-items")
    let totalP = document.querySelector(".total")
    let btn = document.querySelector(".btn")
    

    const Items = [
        {
            id: 1,
            name: "shoe1",
            price: 58
        },
        {
            id: 2,
            name: "t-shert",
            price: 45
        }, {
            id: 3,
            name: "phone",
            price: 516
        },
        {
            id: 4,
            name: "ear-buds",
            price: 250
        }
    ]

    let cart = JSON.parse(localStorage.getItem("CartItems")) || []

    Items.forEach(item => {
        const productDiv = document.createElement("div")
        productDiv.classList.add("product-item")
        productDiv.setAttribute('data-id', `${item.id}`)
        const detailDiv = document.createElement("div")
        detailDiv.classList.add("product-details")
        detailDiv.innerHTML = `<strong>${item.name}</strong><br>Price : $${item.price.toFixed(2)}`
        const ProductBtn = document.createElement("button")
        ProductBtn.textContent = "Add to Cart"
        productDiv.appendChild(detailDiv)
        productDiv.appendChild(ProductBtn)
        products.appendChild(productDiv);


    })

    products.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const parent = e.target.closest(".product-item")
            const id = parseInt(parent.getAttribute("data-id"))
            console.log("Product ID :", id)

            const CartItem = Items.find(item => item.id === id)
            cart.push(CartItem)
            console.log(cart)

            updateCart()
        }
    });

    const updateCart = () => {
        carItems.innerHTML = ""
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement("div")
            li.classList.add("suna")
            li.setAttribute("data-id",`${item.id}`)
            li.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button>Delete</button> `

            carItems.appendChild(li);
            total += item.price

            


        })
        totalP.innerHTML = `$${total.toFixed(2)}`
            
            localStorage.setItem("CartItems", JSON.stringify(cart))
    }

    carItems.addEventListener("click",(e) => {
        if(e.target.tagName === "BUTTON"){
            const component = e.target.closest(".suna")
            if(!component) return 
            const id = parseInt(component.dataset.id)
            console.log(id)
            cart = cart.filter(item => item.id !== id)
            console.log(cart)
            updateCart()

        }
    })

    btn.addEventListener("click",() => {
        alert("Order made Successfully")
    })
    updateCart()

})

