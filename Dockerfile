FROM clojure:lein
COPY . /code
WORKDIR /code
ENTRYPOINT ["lein"]
