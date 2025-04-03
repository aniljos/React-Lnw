import Counter from "@/components/Counter";


export default function Home() {
  return (
    <div>
        <h3>Next.js Application</h3>

        <Counter initialCount={10}/>
    </div>
  );
}
