"use client";

import axios from "axios";
import { toast } from "react-hot-toast";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import Container from "../components/Container";
import Heading from "../components/Heading";

import { SafeListing, SafeUser } from "../types";
import ListingCard from "../components/listings/ListingCard";

interface PropertiesClientProps {
    listings: SafeListing[];
    currentUser?: SafeUser | null;
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({
    listings,
    currentUser,
}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState("");

    const onCancel = useCallback(
        (id: string) => {
            setDeletingId(id);

            axios
                .delete(`/api/listings/${id}`)
                .then(() => {
                    toast.success("Listing deleted successfully! ❌");
                    router.refresh();
                })
                .catch((err) => toast.error(err?.message))
                .finally(() => setDeletingId(""));
        },
        [router]
    );

    useEffect(() => {
        document.title = `${currentUser?.name?.split(" ")[0]}'s Activities`;
    }, [currentUser]);

    return (
        <Container>
            <Heading title="Activities" subtitle="List of your activities" />
            <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6">
                {listings.map((listing, index) => (
                    <ListingCard
                        key={listing.id}
                        data={listing}
                        actionId={listing.id}
                        onAction={onCancel}
                        disabled={deletingId === listing.id}
                        actionLabel="Delete activity"
                        currentUser={currentUser}
                        newest={index === 0}
                    />
                ))}
            </div>
        </Container>
    );
};

export default PropertiesClient;
