"use client"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"


interface CustomerData {
    name: string;
    email: string;
    phone: string;
  }

const data: CustomerData[] = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+1 (555) 987-6543",
    },
    {
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      phone: "+1 (555) 555-5555",
    },
    {
      name: "Alice Brown",
      email: "alice.brown@example.com",
      phone: "+1 (555) 555-5555",
    },
    {
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
      phone: "+1 (555) 555-5555",
    },
    {
      name: "David Wilson",
      email: "david.wilson@example.com",
      phone: "+1 (555) 555-5555",
    },
  ];

 function Component() {
  return (
    <div className="border rounded-lg w-full">
      <div className="relative w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>
                <span className="sr-only">View</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((customer) => (
              <TableRow key={customer.name}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Component