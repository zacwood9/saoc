import type { FC, PropsWithChildren } from "hono/jsx";

type AdminLayoutProps = PropsWithChildren<{
  title?: string;
}>;

export const AdminLayout: FC<AdminLayoutProps> = ({
  children,
  title = "Admin Dashboard | St. Athanasius Orthodox Church",
}) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
    </head>

    <body className="bg-gray-100 font-sans">
      <header className="bg-blue-900 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://i.etsystatic.com/35048573/r/il/89f712/5234301949/il_fullxfull.5234301949_4jg7.jpg"
              alt="Church Logo"
              className="h-10 w-10 mr-3 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-bold">St. Athanasius</h1>
              <p className="text-sm text-blue-200">Admin Portal</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">{children}</main>
    </body>
  </html>
);
