using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SQLitePCL;

namespace API.Controllers
{
    public class BasketController: BaaseApiController
    {
        private readonly StoreContext _context;

        public BasketController(StoreContext context)
        {
            _context = context;
        }
        
        [HttpGet(Name="GetBasket")]
        public async Task<ActionResult<BasketDto>> GetBasket()
        {
            Basket basket = await RetrieveBasket();

            if (basket == null) return NotFound();

            return MaBasketToDto(basket);

        }
        
        [HttpPost]  //api/basket?productId=3&quantity=3
        public async Task<ActionResult<BasketDto>> AddItemToBasket(int productId, int quantity){
            //get basket
            //create basket
            //get prod
            //get item
            //save changes
    
                var basket =  await RetrieveBasket();
                if(basket == null) basket = CreateBasket();

                var product = await _context.Products.FindAsync(productId);

                if(product == null) return NotFound();
                basket.AddItem(product, quantity);

                var result = await _context.SaveChangesAsync() > 0; //if > 0 something is saved in db else bad req

                if(result)  return CreatedAtRoute("GetBasket", MaBasketToDto(basket));
                return BadRequest(new ProblemDetails{ Title="Problem saving item to basket"});

        }


        [HttpDelete]
        public async Task<ActionResult> RemoveBasketItem(int productId, int quantity){
            //get basket
            
            var basket = await RetrieveBasket();
            if(basket == null) return NotFound();
            basket.RemoveItem(productId, quantity);
            var result = await _context.SaveChangesAsync() > 0; //if > 0 something is saved in db else bad req

            if(result)  return Ok();
            return BadRequest(new ProblemDetails{ Title="Problem removing item from the basket"});

        }


        private async Task<Basket> RetrieveBasket()
        {
            return await _context.Baskets
                .Include(i => i.Items)
                .ThenInclude(p => p.Product)
                .FirstOrDefaultAsync(x => x.BuyerId == Request.Cookies["buyerId"]);
        }

        
        private Basket CreateBasket()
        {
            var buyerId = Guid.NewGuid().ToString();
            var CookieOptions = new CookieOptions{IsEssential = true, Expires = DateTime.Now.AddDays(30)};
            Response.Cookies.Append("buyerId", buyerId, CookieOptions);
            var basket = new Basket{BuyerId = buyerId};
            _context.Baskets.Add(basket);
            return basket;
        }
        private BasketDto MaBasketToDto(Basket basket)
        {
            return new BasketDto
            {
                Id = basket.Id,
                BuyerId = basket.BuyerId,
                Items = basket.Items.Select(item => new BasketItemDto
                {
                    ProductId = item.ProductId,
                    Name = item.Product.Name,
                    Price = item.Product.Price,
                    PictureURL = item.Product.PictureUrl,
                    Brand = item.Product.Brand,
                    Quantity = item.Quantity
                }).ToList(),

            };
        }
    }
}