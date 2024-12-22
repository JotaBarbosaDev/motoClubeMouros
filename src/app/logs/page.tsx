"use client";

import {useState} from "react";
import {Input} from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar";

// Ícone de pesquisa
function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("timestamp");
  const [sortDirection, setSortDirection] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);

  // Controla quantas linhas por página (itemsPerPage) serão exibidas.
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const activityLogs = [
    {
      id: 1,
      user: "John Doe",
      action: "Created new project",
      timestamp: "2023-04-15 10:30:00",
      details: 'Project name: "Acme Inc. Website"',
    },
    {
      id: 2,
      user: "Jane Smith",
      action: "Uploaded file",
      timestamp: "2023-04-16 14:20:00",
      details: 'File name: "design_mockup.pdf"',
    },
    {
      id: 3,
      user: "Bob Johnson",
      action: "Deleted user account",
      timestamp: "2023-04-17 09:45:00",
      details: 'Username: "jdoe"',
    },
    {
      id: 4,
      user: "Sarah Lee",
      action: "Edited team member",
      timestamp: "2023-04-18 16:10:00",
      details: 'User: "Jane Smith", Role: "Developer"',
    },
    {
      id: 5,
      user: "Tom Wilson",
      action: "Commented on task",
      timestamp: "2023-04-19 11:25:00",
      details: 'Task: "Implement new feature"',
    },
    {
      id: 6,
      user: "Emily Davis",
      action: "Archived project",
      timestamp: "2023-04-20 13:50:00",
      details: 'Project name: "Legacy System Upgrade"',
    },
    {
      id: 7,
      user: "Michael Brown",
      action: "Invited new user",
      timestamp: "2023-04-21 15:00:00",
      details: 'Email: "jsmith@acme.com"',
    },
    {
      id: 8,
      user: "Jessica Taylor",
      action: "Completed task",
      timestamp: "2023-04-22 09:10:00",
      details: 'Task: "Design new homepage layout"',
    },
    {
      id: 9,
      user: "David Anderson",
      action: "Assigned task",
      timestamp: "2023-04-23 14:40:00",
      details: 'Task: "Implement search functionality", Assignee: "Jane Smith"',
    },
    {
      id: 10,
      user: "Samantha Thompson",
      action: "Closed support ticket",
      timestamp: "2023-04-24 11:35:00",
      details: 'Ticket ID: "#1234"',
    },
    {
      id: 11,
      user: "Samantha Thompson",
      action: "Closed support ticket",
      timestamp: "2023-04-24 11:35:00",
      details: 'Ticket ID: "#1234"',
    },
    {
      id: 12,
      user: "Samantha Thompson",
      action: "Closed support ticket",
      timestamp: "2023-04-24 11:35:00",
      details: 'Ticket ID: "#1234"',
    },
    {
      id: 13,
      user: "John Doe",
      action: "Created new project",
      timestamp: "2023-04-15 10:30:00",
      details: 'Project name: "Acme Inc. Website"',
    },
    {
      id: 14,
      user: "Jane Smith",
      action: "Uploaded file",
      timestamp: "2023-04-16 14:20:00",
      details: 'File name: "design_mockup.pdf"',
    },
    {
      id: 15,
      user: "Bob Johnson",
      action: "Deleted user account",
      timestamp: "2023-04-17 09:45:00",
      details: 'Username: "jdoe"',
    },
    {
      id: 16,
      user: "Sarah Lee",
      action: "Edited team member",
      timestamp: "2023-04-18 16:10:00",
      details: 'User: "Jane Smith", Role: "Developer"',
    },
    {
      id: 17,
      user: "Tom Wilson",
      action: "Commented on task",
      timestamp: "2023-04-19 11:25:00",
      details: 'Task: "Implement new feature"',
    },
    {
      id: 18,
      user: "Emily Davis",
      action: "Archived project",
      timestamp: "2023-04-20 13:50:00",
      details: 'Project name: "Legacy System Upgrade"',
    },
    {
      id: 19,
      user: "Michael Brown",
      action: "Invited new user",
      timestamp: "2023-04-21 15:00:00",
      details: 'Email: "jsmith@acme.com"',
    },
    {
      id: 20,
      user: "Jessica Taylor",
      action: "Completed task",
      timestamp: "2023-04-22 09:10:00",
      details: 'Task: "Design new homepage layout"',
    },
    {
      id: 21,
      user: "David Anderson",
      action: "Assigned task",
      timestamp: "2023-04-23 14:40:00",
      details: 'Task: "Implement search functionality", Assignee: "Jane Smith"',
    },
    {
      id: 22,
      user: "Samantha Thompson",
      action: "Closed support ticket",
      timestamp: "2023-04-24 11:35:00",
      details: 'Ticket ID: "#1234"',
    },
    {
      id: 23,
      user: "Samantha Thompson",
      action: "Closed support ticket",
      timestamp: "2023-04-24 11:35:00",
      details: 'Ticket ID: "#1234"',
    },
    {
      id: 24,
      user: "Samantha Thompson",
      action: "Closed support ticket",
      timestamp: "2023-04-24 11:35:00",
      details: 'Ticket ID: "#1234"',
    },
    {
      id: 25,
      user: "John Doe",
      action: "Created new project",
      timestamp: "2023-04-15 10:30:00",
      details: 'Project name: "Acme Inc. Website"',
    },
    {
      id: 26,
      user: "Jane Smith",
      action: "Uploaded file",
      timestamp: "2023-04-16 14:20:00",
      details: 'File name: "design_mockup.pdf"',
    },
    {
      id: 27,
      user: "Bob Johnson",
      action: "Deleted user account",
      timestamp: "2023-04-17 09:45:00",
      details: 'Username: "jdoe"',
    },
    {
      id: 28,
      user: "Sarah Lee",
      action: "Edited team member",
      timestamp: "2023-04-18 16:10:00",
      details: 'User: "Jane Smith", Role: "Developer"',
    },
    {
      id: 29,
      user: "Tom Wilson",
      action: "Commented on task",
      timestamp: "2023-04-19 11:25:00",
      details: 'Task: "Implement new feature"',
    },
    {
      id: 30,
      user: "Emily Davis",
      action: "Archived project",
      timestamp: "2023-04-20 13:50:00",
      details: 'Project name: "Legacy System Upgrade"',
    },
    {
      id: 31,
      user: "Michael Brown",
      action: "Invited new user",
      timestamp: "2023-04-21 15:00:00",
      details: 'Email: "jsmith@acme.com"',
    },
    {
      id: 32,
      user: "Jessica Taylor",
      action: "Completed task",
      timestamp: "2023-04-22 09:10:00",
      details: 'Task: "Design new homepage layout"',
    },
    {
      id: 33,
      user: "David Anderson",
      action: "Assigned task",
      timestamp: "2023-04-23 14:40:00",
      details: 'Task: "Implement search functionality", Assignee: "Jane Smith"',
    },
    {
      id: 34,
      user: "Samantha Thompson",
      action: "Closed support ticket",
      timestamp: "2023-04-24 11:35:00",
      details: 'Ticket ID: "#1234"',
    },
    {
      id: 35,
      user: "Samantha Thompson",
      action: "Closed support ticket",
      timestamp: "2023-04-24 11:35:00",
      details: 'Ticket ID: "#1234"',
    },
    {
      id: 36,
      user: "Samantha Thompson",
      action: "Closed support ticket",
      timestamp: "2023-04-24 11:35:00",
      details: 'Ticket ID: "#1234"',
    },
  ];

  // Filtro simples baseado em pesquisa
  const filteredLogs = activityLogs.filter(
    (log) =>
      log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.details.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Ordenação
  const sortedLogs = filteredLogs.sort((a, b) => {
    if (a[sortColumn as keyof typeof a] < b[sortColumn as keyof typeof b]) {
      return sortDirection === "asc" ? -1 : 1;
    }
    if (a[sortColumn as keyof typeof a] > b[sortColumn as keyof typeof b]) {
      return sortDirection === "asc" ? 1 : -1;
    }
    return 0;
  });

  // Paginação
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedLogs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedLogs.length / itemsPerPage);

  // Handlers
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (column: keyof (typeof activityLogs)[0]) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Header da sidebar */}
        <div>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
            </div>
          </header>
        </div>

        {/* Conteúdo principal */}
        <div className="p-6 md:p-8 lg:p-10">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Log de atividades</h1>
            {/* Campo de pesquisa */}
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Pesquisar..."
                value={searchTerm}
                onChange={handleSearch}
                className="pl-10 pr-4 py-2 rounded-md border border-input bg-background focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          {/* Tabela */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead
                    className="cursor-pointer"
                    onClick={() => handleSort("user")}
                  >
                    Utilizadores{" "}
                    {sortColumn === "user" && (
                      <span className="ml-1">
                        {sortDirection === "asc" ? "\u2191" : "\u2193"}
                      </span>
                    )}
                  </TableHead>
                  <TableHead
                    className="cursor-pointer"
                    onClick={() => handleSort("action")}
                  >
                    Ação{" "}
                    {sortColumn === "action" && (
                      <span className="ml-1">
                        {sortDirection === "asc" ? "\u2191" : "\u2193"}
                      </span>
                    )}
                  </TableHead>
                  <TableHead
                    className="cursor-pointer"
                    onClick={() => handleSort("timestamp")}
                  >
                    Timestamp{" "}
                    {sortColumn === "timestamp" && (
                      <span className="ml-1">
                        {sortDirection === "asc" ? "\u2191" : "\u2193"}
                      </span>
                    )}
                  </TableHead>
                  <TableHead>Detalhes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentItems.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell>{log.user}</TableCell>
                    <TableCell>{log.action}</TableCell>
                    <TableCell>{log.timestamp}</TableCell>
                    <TableCell>{log.details}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Secção de paginação em baixo */}
          <div className="flex items-center justify-end space-x-2 py-4">
            {/* Info de quantas linhas aparecem */}
            <div className="flex-1 text-sm text-muted-foreground">
              A mostrar {indexOfFirstItem + 1} até{" "}
              {Math.min(indexOfLastItem, sortedLogs.length)} de{" "}
              {sortedLogs.length} entrada(s)
            </div>

            {/* Linhas por página */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">
                Linhas por página:
              </span>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1); // volta à primeira página
                }}
                className="border rounded-md py-1 px-2 text-sm"
              >
                {[5, 10, 20, 30, 50, 100].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
            </div>

            {/* Botões Anterior e Próximo */}
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Anterior
              </Button>

              {/* Botões de páginas (1, 2, 3, ...) */}
              {Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={page === currentPage ? "default" : "outline"}
                  onClick={() => handlePageChange(page)}
                  className="px-3 py-1 text-sm"
                >
                  {page}
                </Button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages || totalPages === 0}
              >
                Próximo
              </Button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
