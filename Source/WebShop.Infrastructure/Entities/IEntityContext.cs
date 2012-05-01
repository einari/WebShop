using System.Linq;

namespace WebShop.Infrastructure.Entities
{
	public interface IEntityContext<T>
	{
		IQueryable<T>	Entities { get; }
		
		void Attach(T entity);
		void Insert(T entity);
		void Update(T entity);
		void Delete(T entity);
		void Save(T entity);
		void Commit();
	}
}

