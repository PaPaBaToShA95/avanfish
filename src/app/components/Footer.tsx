export default function Footer() {
    return (
        <footer className="w-full border-t bg-background text-muted-foreground py-6 mt-auto">
            <div className=" text-center text-sm">
                <span>
                    &copy; {new Date().getFullYear()} <span className="text-foreground font-medium">AvanFISH</span>. Всі права захищено. Powered by <span className="text-primary font-semibold">Oleksiy Ermantraut</span></span>
            </div>
        </footer>
    );
}
  