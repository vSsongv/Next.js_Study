import Seo from '@/components/Seo';

export async function getServerSideProps({ params: { params } }) {
  return { props: { params } };
}

const Detail = ({ params }) => {
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
};

export default Detail;
