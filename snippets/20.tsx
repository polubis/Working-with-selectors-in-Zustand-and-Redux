import { useRouter } from "next/navigation";

const AnyComponent = () => {
  const router = useRouter();

  const handleClick = () => {
    // Authorized value must be taken
    // from Redux/Zustand store.
    // ❌ Currently it not works!
    if (authorized) {
      router.push("/sign-out");
    } else {
      router.push("/sign-in");
    }
  };

  return <Button onClick={handleClick}>Click me!</Button>;
};
