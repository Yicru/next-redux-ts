import * as React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import { NavigationProps } from "./Navigation.type";
import classNames from "classnames";

const Navigation = (props: NavigationProps) => {
  const classNameForLink = (href: string) =>
    classNames({
      "is-active": props.router.asPath === href
    });

  return (
    <div className="navigation">
      <aside className="menu">
        <p className="menu-label">PAGES</p>
        <ul className="menu-list">
          <li>
            <Link href="/">
              <a className={classNameForLink("/")}>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/now-playing">
              <a className={classNameForLink("/now-playing")}>Now Playing</a>
            </Link>
          </li>
        </ul>
        <p className="menu-label">LINKS</p>
        <ul className="menu-list">
          <li>
            <Link href="https://nextjs-docs-ja.netlify.com/docs/">
              <a target="_blank">NEXT</a>
            </Link>
          </li>
          <li>
            <Link href="https://bulma.io/">
              <a target="_blank">BULMA</a>
            </Link>
            <ul>
              <li>
                <Link href="https://bulma.io/documentation/layout/">
                  <a target="_blank">Layout</a>
                </Link>
              </li>
              <li>
                <Link href="https://bulma.io/documentation/elements/">
                  <a target="_blank">Elements</a>
                </Link>
              </li>
              <li>
                <Link href="https://bulma.io/documentation/components/">
                  <a target="_blank">Components</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default withRouter(Navigation);
