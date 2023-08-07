using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data.Migrations;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace API.DTOs
{
    public class BasketDto
    {
        public int Id { get; set; }
        public string BuyerId { get; set; } 

        public List<BasketItemDto> Items { get; set; }
    }
}