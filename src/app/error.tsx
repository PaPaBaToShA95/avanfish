'use client'

export default function Error({ error }: { error: Error }) {
    return (
        <div className="p-10">
            <h2 className="text-3xl font-bold">Упс, сталася помилка!</h2>
            <p>{error.message}</p>
        </div>
    )
}
