"use client";

import { Button, Paper } from "@mantine/core";
import { motion } from "framer-motion";
import Link from "next/link";
interface Repository {
  id: number;
  name: string;
  fork: boolean;
  description: string;
  html_url: string;
  homepage: string;
  private: boolean;
  // Add more properties as needed
}
export default function Projects({ repoList }: { repoList: Repository[] }) {
  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-center text-2xl lg:text-4xl font-bold uppercase mb-4"
          variants={{
            offscreen: {
              opacity: 0,
            },
            onscreen: {
              opacity: 1,
              transition: {
                delay: 0.5,
              },
            },
          }}
        >
          projects
        </motion.h2>
        <div className="grid grid-col-1 lg:grid-cols-4 gap-4">
          {repoList &&
            repoList.map(
              (repo) =>
                !repo.fork &&
                !repo.private && (
                  <Paper
                    shadow="lg"
                    radius="md"
                    p="xl"
                    withBorder
                    classNames={{ root: "space-y-4" }}
                    key={repo.id}
                  >
                    <h2 className="text-center uppercase font-bold">
                      {repo.name.split("_").join(" ")}
                    </h2>
                    <div className="text-sm min-h-[13rem]">
                      {repo.description ?? "No description provided for now."}
                    </div>
                    <div className="inline-flex justify-between space-x-4">
                      <Button
                        classNames={{
                          root: "uppercase font-bold transition-transform transform hover:scale-95 hover:rotate-2.5",
                        }}
                        variant="outline"
                        component={Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={repo.html_url}
                      >
                        View Code
                      </Button>
                      {repo.homepage !== "" && (
                        <Button
                          classNames={{
                            root: "uppercase font-bold transition-transform transform hover:scale-95 hover:rotate-2.5",
                          }}
                          component={Link}
                          target="_blank"
                          rel="noopener noreferrer"
                          href={repo.homepage}
                        >
                          Visit Site
                        </Button>
                      )}
                    </div>
                  </Paper>
                )
            )}
        </div>
      </motion.div>
    </>
  );
}
``;
