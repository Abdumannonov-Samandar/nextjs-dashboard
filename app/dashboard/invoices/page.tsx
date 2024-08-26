'use client'
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableCell } from "@/components/ui/table"; // Assuming you have a Table component

interface InvoiceData {
  customerName: string;
  invoiceAmount: string;
  invoiceStatus: string;
}

function Invoice() {
  const [customerName, setCustomerName] = useState<string>('');
  const [invoiceAmount, setInvoiceAmount] = useState<string>('');
  const [invoiceStatus, setInvoiceStatus] = useState<string>('');
  const [invoices, setInvoices] = useState<InvoiceData[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors: { [key: string]: string } = {};
    if (!customerName) newErrors.customerName = "Customer name is required";
    if (!invoiceAmount) newErrors.invoiceAmount = "Invoice amount is required";
    if (!invoiceStatus) newErrors.invoiceStatus = "Invoice status is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newInvoice = { customerName, invoiceAmount, invoiceStatus };

    if (editingIndex !== null) {
      // Update the existing invoice
      const updatedInvoices = [...invoices];
      updatedInvoices[editingIndex] = newInvoice;
      setInvoices(updatedInvoices);
      setEditingIndex(null);
    } else {
      // Add the new invoice
      setInvoices([...invoices, newInvoice]);
    }

    // Reset form
    setCustomerName('');
    setInvoiceAmount('');
    setInvoiceStatus('');
    setErrors({});
  };

  const handleEdit = (index: number) => {
    const invoice = invoices[index];
    setCustomerName(invoice.customerName);
    setInvoiceAmount(invoice.invoiceAmount);
    setInvoiceStatus(invoice.invoiceStatus);
    setEditingIndex(index);
  };

  const handleDelete = (index: number) => {
    const updatedInvoices = invoices.filter((_, i) => i !== index);
    setInvoices(updatedInvoices);
  };

  // Filter invoices based on selected status
  const filteredInvoices = invoices.filter(invoice => {
    return filterStatus === 'all' || invoice.invoiceStatus === filterStatus;
  });

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Invoice / Create</CardTitle>
          <CardDescription>Fill out the details to generate a new invoice.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="customer-name">Customer Name</Label>
            <Input
              id="customer-name"
              placeholder="Enter customer name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            {errors.customerName && <p className="text-red-500">{errors.customerName}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="invoice-amount">Invoice Amount</Label>
            <Input
              id="invoice-amount"
              type="number"
              placeholder="0.00"
              value={invoiceAmount}
              onChange={(e) => setInvoiceAmount(e.target.value)}
            />
            {errors.invoiceAmount && <p className="text-red-500">{errors.invoiceAmount}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="invoice-status">Invoice Status</Label>
            <Select
              value={invoiceStatus}
              onValueChange={setInvoiceStatus}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="unpaid">Unpaid</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
            {errors.invoiceStatus && <p className="text-red-500">{errors.invoiceStatus}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" onClick={handleSubmit}>
            {editingIndex !== null ? 'Update Invoice' : 'Create Invoice'}
          </Button>
        </CardFooter>
      </Card>

      {/* Filter Select */}
      <div className="mt-6">
        <Label htmlFor="filter-status">Filter by Status</Label>
        <Select
          value={filterStatus}
          onValueChange={setFilterStatus}
        >
          <SelectTrigger>
            <SelectValue placeholder="All statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="unpaid">Unpaid</SelectItem>
            <SelectItem value="overdue">Overdue</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Invoice Table */}
      {filteredInvoices.length > 0 && (
        <div className="mt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Customer Name</TableCell>
                <TableCell>Invoice Amount</TableCell>
                <TableCell>Invoice Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHeader>
            <tbody>
              {filteredInvoices.map((invoice, index) => (
                <TableRow key={index}>
                  <TableCell>{invoice.customerName}</TableCell>
                  <TableCell>{invoice.invoiceAmount}</TableCell>
                  <TableCell>{invoice.invoiceStatus}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleEdit(index)} className="mr-2">Edit</Button>
                    <Button onClick={() => handleDelete(index)} variant="destructive">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
}

export default Invoice;
