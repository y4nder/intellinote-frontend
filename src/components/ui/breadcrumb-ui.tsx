import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  import { extractTitleFromSlug } from "@/lib/utils";
  import { useLocation, Link } from "react-router-dom";
  import { Home } from "lucide-react";
  
  export function BreadcrumbUi() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
  
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="flex items-center gap-1 text-muted-foreground hover:text-primary">
                <Home className="w-4 h-4" />
                <span className="sr-only md:not-sr-only">Home</span>
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
  
          {pathnames.map((value, index) => {
            const to = "/" + pathnames.slice(0, index + 1).join("/");
            const isLast = index === pathnames.length - 1;
  
            return (
              <div key={to} className="flex items-center gap-1">
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="text-foreground">
                      {extractTitleFromSlug(value)}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={to} className="text-muted-foreground hover:text-primary truncate">
                        {extractTitleFromSlug(value)}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    );
  }
  