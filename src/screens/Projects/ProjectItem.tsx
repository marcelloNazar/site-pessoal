import Link from "next/link";
import { AiOutlineRightCircle } from "react-icons/ai";
import { ProjetoContainer } from "./styles";

interface ProjetoProps {
  title: string;
  type: string;
  id: string;
  img: string;
}

export default function ProjectItem({ title, type, id, img }: ProjetoProps) {
  return (
    <ProjetoContainer imgUrl={img} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button>
        <Link legacyBehavior href={`/projects/${id}`}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjetoContainer>
  );
}
