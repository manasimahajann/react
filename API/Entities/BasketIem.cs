using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("BasketItems")]
    public class BasketIem
    {
        public int Id { get; set; }
        public int Quantity { get; set; }


        //nav prop
        public int ProductId { get; set; }
        public Product Product { get; set; }

        //adding a parent to have cascade relationship on delete
        public int BasketId { get; set; }
        public Basket Basket { get; set; }
    }
}