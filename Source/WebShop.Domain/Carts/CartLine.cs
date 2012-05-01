using System;

namespace WebShop.Domain.Carts
{
	public class CartLine
	{
		public string ProductId { get; set; }
		public int Quantity { get; set; }
		public decimal NetPrice { get; set; }
		public decimal GrossPrice { get; set; }
		public decimal VatRate { get; set;}
	}
}

