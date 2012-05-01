using WebShop.Concepts.Products;

namespace WebShop.Domain
{
	public class OrderLine
	{
		public ProductId ProductId { get; set; }
		public int Quantity { get; set; }
		public decimal NetPrice { get; set; }
		public decimal GrossPrice { get; set; }
	}
}

