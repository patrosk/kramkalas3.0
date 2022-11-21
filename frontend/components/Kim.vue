<template>
  <section>
    <h1>{{ kimPage.kimPage[0].pageBuilder[0].h1 }}</h1>
    <section class="kim">
      <div class="hos-kim">
        <div class="img-container">
          <SanityImage
            :asset-id="kimPage.kimPage[0].pageBuilder[0].heroImage.asset._ref"
            :alt="kimPage.kimPage[0].pageBuilder[0].heroImage.caption"
          />
        </div>
        <section class="hemma-hos-kim">
          <h3>{{ kimPage.kimPage[0].pageBuilder[1].heading }}</h3>
          <p>
            {{ kimPage.kimPage[0].pageBuilder[1].poemParagraph1a }}
            <br />
            {{ kimPage.kimPage[0].pageBuilder[1].poemParagraph1b }}
          </p>
          <p>
            {{ kimPage.kimPage[0].pageBuilder[1].poemParagraph2a }}
            <br />
            {{ kimPage.kimPage[0].pageBuilder[1].poemParagraph2b }}
          </p>
          <p>
            {{ kimPage.kimPage[0].pageBuilder[1].poemParagraph3a }}
            <br />
            {{ kimPage.kimPage[0].pageBuilder[1].poemParagraph3b }}
          </p>
          <p>
            {{ kimPage.kimPage[0].pageBuilder[1].poemParagraph4a }}
            <br />
            {{ kimPage.kimPage[0].pageBuilder[1].poemParagraph4b }}
            <br />
            {{ kimPage.kimPage[0].pageBuilder[1].poemParagraph4c }}
          </p>
          <p>
            {{ kimPage.kimPage[0].pageBuilder[1].poemParagraph5a }}
            <br />
            {{ kimPage.kimPage[0].pageBuilder[1].poemParagraph5b }}
            <br />
            {{ kimPage.kimPage[0].pageBuilder[1].poemParagraph5c }}
            <br />
            {{ kimPage.kimPage[0].pageBuilder[1].poemParagraph5d }}
            <br />
            {{ kimPage.kimPage[0].pageBuilder[1].poemParagraph5e }}
          </p>
          <p>
            {{ kimPage.kimPage[0].pageBuilder[1].poemParagraph6a }}
            <br />
            {{ kimPage.kimPage[0].pageBuilder[1].poemParagraph6b }}
          </p>
          <p>
            {{ kimPage.kimPage[0].pageBuilder[1].poemParagraph7a }}
            <br />
            {{ kimPage.kimPage[0].pageBuilder[1].poemParagraph7b }}
          </p>
          <p>
            {{ kimPage.kimPage[0].pageBuilder[1].poemParagraph8a }}
            <br />
            {{ kimPage.kimPage[0].pageBuilder[1].poemParagraph8b }}
          </p>
        </section>
      </div>
      <section class="books">
        <h2>{{ kimPage.kimPage[0].pageBuilder[2].heading }}</h2>
        <div class="books-wrapper">
          <p class="books-description">
            {{ kimPage.kimPage[0].pageBuilder[2].booksDescription1 }}
            <br />
            <br />
            {{ kimPage.kimPage[0].pageBuilder[2].booksDescription2 }}
            <br />
            <br />
            {{ kimPage.kimPage[0].pageBuilder[2].booksDescription3 }}
          </p>
          <div class="books-container">
            <div class="book">
              <div class="book-cover">
                <h4>{{ kimPage.kimPage[0].pageBuilder[3].heading }}</h4>
                <div class="img-container">
                  <SanityImage
                    :asset-id="
                      kimPage.kimPage[0].pageBuilder[3].bookCover.asset._ref
                    "
                    :alt="kimPage.kimPage[0].pageBuilder[3].bookCover.caption"
                  />
                </div>
              </div>
              <div class="book-info">
                <p class="book-description">
                  {{ kimPage.kimPage[0].pageBuilder[3].bookDescription }}:
                </p>
                <p
                  class="book-excerpt"
                  v-for="excerpt in kimPage.kimPage[0].pageBuilder[3]
                    .bookExcerpt"
                  :key="excerpt"
                >
                  {{ excerpt }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`{ "kimPage": *[_type == "kimPage"]}`;

export default {
  async fetch() {
    this.kimPage = await this.$sanity.fetch(query);
  },
  data: () => ({ kimPage: "" }),
};
</script>
