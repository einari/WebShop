using System;

namespace WebShop.Domain
{
	public class OrderLine
	{
		public string ProductId { get; set; }
		public int Quantity { get; set; }
		public decimal NetPrice { get; set; }
		public decimal GrossPrice { get; set; }
	}
}

