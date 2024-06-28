import items from '../Treatments/page/items'; // Import the items array

const ItemPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const item = items.find((item) => item.id === parseInt(id));

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.text}</p>
    </div>
  );
};