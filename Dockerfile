FROM clojure
COPY . /code
WORKDIR /code
CMD ["lein", "run"]
