function counter() {
    document.querySelectorAll('.counter').forEach(counter => {
        const finalValue = counter.innerHTML;
        let currentValue = 0;

        const timer = setInterval(() => {
            if (currentValue >= finalValue) {
                counter.innerHTML = '+' + finalValue;
                clearInterval(timer);
            } else {
                currentValue += 10;
                counter.innerHTML = currentValue;
            }
        }, 1);
    })
}

counter();

const reviewsData = {
    "principalReviews": {
        "0": {
            "stars": "5",
            "reviewer": "Maria Silva",
            "reviewerTitle": "Food Blogger",
            "reviewerInstitution": "Blog Comendo Bem",
            "reviewtitle": "Caixa de Delícias Celestiais de Donuts",
            "reviewDescription": "Maravilhoso! A Caixa de Delícias Celestiais de Donuts é um sonho realizado para qualquer amante de donuts. Cada mordida é como uma explosão de felicidade, com uma mistura deliciosa de sabores e coberturas. Dos clássicos donuts glaceados aos recheados com frutas exóticas, esta caixa oferece uma variedade celestial que me deixa desejando por mais. Altamente recomendado!"
        },
        "1": {
            "stars": "4",
            "reviewer": "Sarah Johnson",
            "reviewerTitle": "Food Blogger",
            "reviewerInstitution": "TastyTreats Blog",
            "reviewtitle": "Magic Sprinkles Donut Collection",
            "reviewDescription": "Pure magic in every bite! The Magic Sprinkles Donut Collection is a delightful feast for the eyes and taste buds. The vibrant colors and whimsical sprinkles make them perfect for kids and kids-at-heart. Each donut is pillowy-soft and generously coated with a variety of sprinkles that add a delightful crunch. It's a magical experience that brings joy to any occasion!"
        },
        "2": {
            "stars": "5",
            "reviewer": "Emily Chen",
            "reviewerTitle": "Food Enthusiast",
            "reviewerInstitution": "Foodie Magazine",
            "reviewtitle": "Gourmet Donut Sampler Pack",
            "reviewDescription": "A gourmet delight! The Gourmet Donut Sampler Pack is a treat for those who appreciate the finer things in life. The combination of sophisticated flavors, such as rich dark chocolate, zesty lemon, and velvety caramel, is a gastronomic adventure. The attention to detail in presentation and taste sets these donuts apart. Indulge yourself or surprise someone with this exquisite collection."
        },
        "3": {
            "stars": "4",
            "reviewer": "Mark Turner",
            "reviewerTitle": "Event Planner",
            "reviewerInstitution": "Eventful Planning Co.",
            "reviewtitle": "Mini Donut Party Platter",
            "reviewDescription": "Perfect for gatherings! The Mini Donut Party Platter is a crowd-pleaser that steals the show at any event. These bite-sized treats are cute, flavorful, and easy to share. The platter offers a great variety of donuts, making it ideal for satisfying everyone's taste preferences. Whether it's a birthday party or an office celebration, this platter brings smiles and happy tummies!"
        },
        "4": {
            "stars": "5",
            "reviewer": "Lisa Adams",
            "reviewerTitle": "Health & Wellness Coach",
            "reviewerInstitution": "Healthy Living Institute",
            "reviewtitle": "Healthy Halo Donuts",
            "reviewDescription": "A guilt-free pleasure! The Healthy Halo Donuts are a game-changer for health-conscious donut enthusiasts. These guilt-free delights use wholesome ingredients and are baked to perfection, delivering the same irresistible taste without the excess calories. The gluten-free and vegan options are a plus, catering to a wider audience. Now, I can enjoy my favorite treat without compromising on my wellness journey!"
        },
        // Add more reviews here...
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const reviewsList = document.getElementById("reviewsList");

    for (const key in reviewsData.principalReviews) {
        if (reviewsData.principalReviews.hasOwnProperty(key)) {
            const review = reviewsData.principalReviews[key];

            const listItem = document.createElement("li");
            listItem.classList.add("review-item");
            listItem.classList.add("glassmorphism-card");

            const title = document.createElement("h2");
            title.classList.add("review-title");
            title.textContent = review.reviewtitle;

            const info = document.createElement("p");
            info.classList.add("review-info");
            info.textContent = `${review.reviewer}, ${review.reviewerTitle} - ${review.reviewerInstitution}`;

            const description = document.createElement("p");
            description.classList.add("review-description");
            description.textContent = review.reviewDescription;

            const rating = document.createElement("div");
            rating.classList.add("star-rating");
            rating.setAttribute("data-rating", review.stars); // Replace "5" with the actual rating from your data

            // Add 5 stars to represent the rating (you can replace this with the actual rating from your data)
            for (let i = 1; i <= review.stars; i++) {
                const star = document.createElement("span");
                star.innerHTML = "&#9733;"; // Unicode star character
                rating.appendChild(star);
            }

            listItem.appendChild(title);
            listItem.appendChild(info);
            listItem.appendChild(description);
            listItem.appendChild(rating);

            reviewsList.appendChild(listItem);
        }
    }
});


const productsData = {
    "principalProducts": {
        "0": {
            "productName": "Caixa de Delícias Celestiais de Donuts",
            "productDescription": "A Caixa de Delícias Celestiais de Donuts é um sonho realizado para qualquer amante de donuts. Cada mordida é como uma explosão de felicidade, com uma mistura deliciosa de sabores e coberturas. Dos clássicos donuts glaceados aos recheados com frutas exóticas, esta caixa oferece uma variedade celestial que me deixa desejando por mais. Altamente recomendado!",
            "productPrice": "R$ 29,99",
            "promotionalPrice": "R$ 19,99",
            "productImage": "../assets/img/caixa-de-delicias-celestiais-donuts.jpg"
        },
        "1": {
            "productName": "Magic Sprinkles Donut Collection",
            "productDescription": "Pure magic in every bite! The Magic Sprinkles Donut Collection is a delightful feast for the eyes and taste buds. The vibrant colors and whimsical sprinkles make them perfect for kids and kids-at-heart. Each donut is pillowy-soft and generously coated with a variety of sprinkles that add a delightful crunch. It's a magical experience that brings joy to any occasion!",
            "productPrice": "R$ 29,99",
            "promotionalPrice": "R$ 25,99",
            "productImage": "../assets/img/Magic Sprinkles Donut Collection.jpg"
        },
        "2": {
            "productName": "Gourmet Donut Sampler Pack",
            "productDescription": "A gourmet delight! The Gourmet Donut Sampler Pack is a treat for those who appreciate the finer things in life. The combination of sophisticated flavors, such as rich dark chocolate, zesty lemon, and velvety caramel, is a gastronomic adventure. The attention to detail in presentation and taste sets these donuts apart. Indulge yourself or surprise someone with this exquisite collection.",
            "productPrice": "R$ 49,99",
            "promotionalPrice": "R$ 39,99",
            "productImage": "../assets/img/Gourmet Donut Sampler Pack.jpg"
        },
        "3": {
            "productName": "Mini Donut Party Platter",
            "productDescription": "Perfect for gatherings! The Mini Donut Party Platter is a crowd-pleaser that steals the show at any event. These bite-sized treats are cute, flavorful, and easy to share. The platter offers a great variety of donuts, making it ideal for satisfying everyone's taste preferences. Whether it's a birthday party or an office celebration, this platter brings smiles and happy tummies!",
            "productPrice": "R$ 39,99",
            "promotionalPrice": "R$ 29,99",
            "productImage": "../assets/img/Mini Donut Party Platter.jpg"
        },
    },
    "secondaryProducts": {
        "0": {
            "productName": "Healthy Halo Donuts",
            "productDescription": "A guilt-free pleasure! The Healthy Halo Donuts are a game-changer for health-conscious donut enthusiasts. These guilt-free delights use wholesome ingredients and are baked to perfection, delivering the same irresistible taste without the excess calories. The gluten-free and vegan options are a plus, catering to a wider audience. Now, I can enjoy my favorite treat without compromising on my wellness journey!",
            "productPrice": "R$ 29,99",
            "promotionalPrice": "R$ 19,99",
            "productImage": "../assets/img/Healthy Halo Donuts.jpg"
        },
        "1": {
            "productName": "Donut Holes",
            "productDescription": "A bite-sized delight! The Donut Holes are a fun twist on the classic donut. These bite-sized treats are perfect for snacking on the go or sharing with friends. The variety of flavors and toppings make them a crowd-pleaser. The best part is that you can try different flavors without feeling guilty. It's a win-win!",
            "productPrice": "R$ 19,99",
            "promotionalPrice": "R$ 14,99",
            "productImage": "../assets/img/Donut Holes.jpg"
        },
        "2": {
            "productName": "Donut Ice Cream Sandwich",
            "productDescription": "A match made in heaven! The Donut Ice Cream Sandwich is a heavenly treat that combines two of my favorite things: donuts and ice cream. The soft, pillowy donut is the perfect complement to the creamy ice cream. It's a match made in heaven that will satisfy any sweet tooth!",
            "productPrice": "R$ 19,99",
            "promotionalPrice": "R$ 14,99",
            "productImage": "../assets/img/Donut Ice Cream Sandwich.jpg"
        },
        "3": {
            "productName": "Donut Cake",
            "productDescription": "A donut lover's dream! The Donut Cake is a dream come true for donut lovers. It's the perfect combination of cake and donuts, with layers of fluffy cake sandwiched between two layers of donuts. The result is a decadent dessert that will satisfy any sweet tooth. It's also great for sharing with friends and family!",
            "productPrice": "R$ 39,99",
            "promotionalPrice": "R$ 29,99",
            "productImage": "../assets/img/Donut Cake.jpg"
        },
    }
};


document.addEventListener("DOMContentLoaded", function () {
    const productsList = document.getElementById("productsList");

    for (const key in productsData.principalProducts) {
        if (productsData.principalProducts.hasOwnProperty(key)) {
            const product = productsData.principalProducts[key];

            const listItem = document.createElement("li");
            listItem.classList.add("product-item");
            listItem.classList.add("product-card");

            const title = document.createElement("h2");
            title.classList.add("product-title");
            title.textContent = product.productName;

            const description = document.createElement("p");
            description.classList.add("product-description");
            description.textContent = product.productDescription;

            const price = document.createElement("p");
            price.classList.add("text-sliced");
            price.textContent = 'From: ' + product.productPrice;

            const promotionalPrice = document.createElement("p");
            promotionalPrice.classList.add("product-price");
            promotionalPrice.textContent = 'To: ' + product.promotionalPrice;

            const image = document.createElement("img");
            image.classList.add("product-image");
            image.src = product.productImage;

            listItem.appendChild(image);
            listItem.appendChild(title);
            listItem.appendChild(description);
            listItem.appendChild(price);
            listItem.appendChild(promotionalPrice);

            productsList.appendChild(listItem);
        }
    }
});