import { Link, useNavigate } from "react-router-dom";
import styles from "../style/Cart.module.css";

export default function Navigated({ links, welcom, acstyle }) {
  const navigate = useNavigate();

  return (
    <>
      <nav aria-label="breadcrumb" className={acstyle}>
        <ol className={`${styles.breadcrumb}`}>
          {links.map((link, index) => (
            <li
              key={index}
              className={`${styles.breadcrumbItem} ${
                link.active ? styles.breadcrumbItemActive : ""
              }`}
              aria-current={link.active ? "page" : undefined}
            >
              {link.active ? (
                <span>{link.name}</span>
              ) : (
                <Link
                  to={link.path}
                  className={styles.breadcrumbItem}
                  onClick={() => navigate(link.path)}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
        {welcom}
      </nav>
    </>
  );
}
