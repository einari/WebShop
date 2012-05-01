using WebShop.Concepts.Products;

namespace WebShop.Domain.Carts
{
	public class CartLine
	{
		public ProductId ProductId { get; set; }
		public int Quantity { get; set; }
		
		public decimal ItemNetPrice { get; set; }
		public decimal ItemGrossPrice { get; set; }
		
		public decimal TotalNetPrice { get; set; }
		public decimal TotalGrossPrice { get; set; }
		
		public decimal VatRate { get; set;}
	}
}

