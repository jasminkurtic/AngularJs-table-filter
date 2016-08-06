using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MultiSelectTableFilters.Startup))]
namespace MultiSelectTableFilters
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
