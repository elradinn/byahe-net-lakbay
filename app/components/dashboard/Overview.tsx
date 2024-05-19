import Link from "next/link";
import {
    Activity,
    ArrowUpRight,
    CreditCard,
    Users,
    WalletMinimal,
} from "lucide-react";

import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/card";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/app/components/ui/table";
import { SafeReservation } from "@/app/types";

interface Props {
    listingCount: number;
    totalReservations: number;
    bookingsToday: number;
    totalRevenue: number;
    transactions: SafeReservation[];
}

export function Overview({
    listingCount,
    totalReservations,
    bookingsToday,
    totalRevenue,
    transactions,
}: Props) {
    return (
        <div className="flex flex-col min-h-screen px-4 mx-auto xl:px-20 md:px-10 sm:px-2">
            <main className="flex flex-col flex-1 gap-4 md:gap-8 md:p-8">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    <Card x-chunk="dashboard-01-chunk-0">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Total Revenue
                            </CardTitle>
                            <WalletMinimal className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                PHP {totalRevenue}
                            </div>
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-1">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Bookings Today
                            </CardTitle>
                            <Users className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {bookingsToday}
                            </div>
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-2">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Total Bookings
                            </CardTitle>
                            <CreditCard className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {totalReservations}
                            </div>
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-3">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Total Activities
                            </CardTitle>
                            <Activity className="w-4 h-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {listingCount}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid gap-4 md:gap-8">
                    <Card
                        className="xl:col-span-2"
                        x-chunk="dashboard-01-chunk-4"
                    >
                        <CardHeader className="flex flex-row items-center">
                            <div className="grid gap-2">
                                <CardTitle>Transactions</CardTitle>
                                <CardDescription>
                                    Recent transactions from your activities.
                                </CardDescription>
                            </div>
                            {/* <Button asChild size="sm" className="gap-1 ml-auto">
                                <Link href="#">
                                    View All
                                    <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </Button> */}
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Customer</TableHead>
                                        <TableHead>Activity Name</TableHead>
                                        <TableHead className="text-right">
                                            Amount (PHP)
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {transactions.map((value, index) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell>
                                                    <div className="font-medium">
                                                        {value.user.name}
                                                    </div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        {value.user.email}
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    {value.listing.title}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    {value.totalPrice}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
