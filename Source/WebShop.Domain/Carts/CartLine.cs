using WebShop.Concepts.Products;

namespace WebShop.Domain.Carts
{
	public class CartLine
	{
		public ProductId ProductId { get; set; }
		public int Quantity { get; set; }
		public decimal NetPrice { get; set; }
		public decimal GrossPrice { get; set; }
		public decimal VatRate { get; set;}
	}
}

