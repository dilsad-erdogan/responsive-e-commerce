import Heading from "../Shared/Heading"
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
    {
        id: 1,
        title: "How to choose perfect smartwatch",
        subtitle: "Minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maşores molestiae laudantium. Porro?",
        published: "Jan 20, 2024 by Dilsad",
        image: Img1,
    },
    {
        id: 2,
        title: "How to choose perfect gadget",
        subtitle: "Minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maşores molestiae laudantium. Porro?",
        published: "Jan 20, 2024 by Rukiye",
        image: Img2,
    },
    {
        id: 3,
        title: "How to choose perfect VR headset",
        subtitle: "Minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maşores molestiae laudantium. Porro?",
        published: "Jan 20, 2024 by Erdoğan",
        image: Img3,
    },
];

const Blogs = () => {
  return (
    <div className="container my-12">
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />

        {/* Blog section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
            {/* Blog Card */}
            {BlogData.map((data) => (
                <div key={data.id} className="bg-white dark:bg-gray-900">
                    {/* Image section */}
                    <div className="overflow-hidden rounded-2xl mb-2">
                        <img src={data.image} alt="" className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500" />
                    </div>

                    {/* Content section */}
                    <div className="space-y-2">
                        <p className="text-sm text-gray-500">{data.published}</p>
                        <p className="font-bold line-clamp-1">{data.title}</p>
                        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{data.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Blogs