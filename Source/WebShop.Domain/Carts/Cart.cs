using System.Collections.Generic;

namespace WebShop.Domain.Carts
{
	public class Cart
	{
		List<CartLine>	_lines = new List<CartLine>();
		
		public IEnumerable<CartLine>	Lines { get { return _lines; } }
		
		public decimal TotalNetPrice { get; set; }
		public decimal TotalGrossPrice { get; set; }
	}
}

