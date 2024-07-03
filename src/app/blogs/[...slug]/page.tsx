function getBlogs() {
  const blogs = [
    {
      programming: ["C-programming", "java", "python"],
    },
    {
      fashion: ["shoes", "belt", "pant"],
    },
    {
      tech: ["laptop", "mobile", "keyboard"],
    },
  ];

  return blogs;
}

export default function BlogsCatchAll(props: { params: { slug: string[] } }) {
  const slug = props.params.slug;

  const blogs = getBlogs();

  return (
    <div>
      {blogs.map((category: any, index) => (
        <ul key={index}>
          {category[slug[0]]?.map((item: string) => (
            <li
              key={item}
              className="p-5 bg-white rounded text-blue-600 w-max my-3"
            >
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
