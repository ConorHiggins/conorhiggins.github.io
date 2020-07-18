<template>
  <div class="content">
    <div class="content__section">
      <h2>About Me</h2>
      <div class="content__row">
        <div class="content__column content__column--50">
          <p>
            I'm an experienced full stack engineer, with a background in human computer interaction and a huge interest in human-centered design, user experience and research.
          </p>

          <p>
            I enjoy all aspects of engineering and leadership, from designing solutions to key problems, to growing talented customer-focused teams.
          </p>
        </div>

        <div class="content__column content__column--50">
          <div class="content__skills">
            <ProgressBar
              title="Front-End Development"
              percent="90"
              color="#00e676"/>

            <ProgressBar
              title="Back-End Development"
              percent="70"
              color="#2979ff"/>

            <ProgressBar
              title="UX"
              percent="80"
              color="#651fff"/>

            <ProgressBar
              title="Management & Leadership"
              percent="90"
              color="#ff4081"/>

            <ProgressBar
              title="Research"
              percent="70"
              color="#00e5ff"/>
          </div>
        </div>
      </div>

      <div class="content__row">
        <div class="logos">
          <img src="../assets/HTML5.svg" alt="HTML5">
          <img src="../assets/Vue.svg" alt="Vue">
          <img src="../assets/Go.svg" alt="Go">
          <img src="../assets/CSS3.svg" alt="CSS3">
          <img src="../assets/JS.svg" alt="Javascript">
          <img src="../assets/Knockout.svg" alt="KnockoutJS">
          <img src="../assets/LESS.svg" alt="LESS">
          <img src="../assets/SASS.svg" alt="SASS">
        </div>
      </div>
    </div>

    <div class="content__section content__section--experience">
      <h2>Experience</h2>
      <div class="content__row"
          v-for="item in history"
          :key="item.title">
        <TimelineEvent :item="item"/>
      </div>
    </div>

    <div class="content__section content__section--education">
      <div class="content__column content__column--50">
        <h2>Education</h2>
        <div class="content__row"
            v-for="item in education"
            :key="item.title">
          <TimelineEvent :item="item"/>
        </div>
      </div>

      <div class="content__column content__column--50">
        <h2>Awards</h2>
        <div class="content__row"
            v-for="award in awards"
            :key="award.title">
          <TimelineEvent :item="award"/>
        </div>
      </div>
    </div>

    <div class="content__section content__section--writing">
      <h2>Writing</h2>
      <div class="content__row">
        <ul>
          <li>
            Higgins, C., Kearns, Á., Ryan, C., & Fernstrom, M. (2016). The Role of Gamification and Evolutionary Computation in the Provision of Self-Guided Speech Therapy. In Handbook of Research on Holistic Perspectives in Gamification for Clinical Practice (pp. 161–186). Hershey: IGI Global.
          </li>
          <li>
            Higgins, C., Ryan, C., Kearns., A. and Fernstrom, M. (2014) The Creation and Facilitation of Speech and Language Therapy Sessions for individuals with Aphasia. GECCO Comp'14 Proceedings of the 2014 conference companion on Genetic and evolutionary computation companion, 109-110. DOI 10.1145/2598394.2598485
          </li>
          <li>
            Higgins, C., Kearns, A., Ryan, C., Fernstrom, M. and Franklin, S. (2014) Towards unsupervised remote therapy for individuals with aphasia. Mobile Computing, Applications, and Services Lecture Notes of the Institute for Computer Sciences, Social Informatics and Telecommunications Engineering, 130, 265-268 DOI 10.1007/978-3- 319-05452-0_20
          </li>
          <li>
            Kearns, A., Franklin, S. and Higgins, C. (2012) Investigating the use of iPad and App to deliver Semantic Feature Analysis (SFA) treatment in clients with aphasia. Brain Impairment, 13 (1) 141.
          </li>
          <li>
            Kearns, A., Higgins, C., Franklin, S. (2012) ‘Aphasia Therapy via iPad and App’ 9th Conference of the Neuropsychological Rehabilitation: Special Interest Group of the World Federation for NeuroRehabilitation (WFNR), Bergen, Norway, July 2012
          </li>
          <li>
            Higgins, C., Kearns, A. and Franklin, S. (2012) “The development of a semantic feature analysis based mobile application for individuals with aphasia”, poster presented at MobiSys, Ambleside, UK, June 2012.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import ProgressBar from '../components/ProgressBar.vue'
  import TimelineEvent from '../components/TimelineEvent.vue'

  export default {
    name: 'Content',
    components: {
      ProgressBar,
      TimelineEvent,
    },
    data: function() {
      return {
        history: [
          {
            title: "Teamwork.com",
            subtitle: '',
            icon: 'tasks',
            skills: ['Vue', 'Go', 'Coffeescript', 'KnockoutJS', 'Coldfusion', 'Product Analytics (Pendo)', 'SQL (MariaDB)', 'Redis', 'Hiring', 'Planning'],
            what: [
              'Technical Lead of Teamwork\'s main product, using a variety of languages and frameworks.',
              'Responsible for hiring and scaling a large multi-disciplinary engineering team. Also responsible for performance management and reviews.',
              'Responsible for defining technical implementations and architectural decisions.',
              'Leading product research and planning while being a key contributor via continuous full-stack development.',
            ],
            when: '2015 - present',
          },
          {
            title: "SANTA",
            subtitle: 'Self-Administered Naming Therapy for Aphasia',
            skills: ['Research', 'Prototyping (Balsamiq)', 'Firebase', 'Angular'],
            icon: 'random',
            where: 'Department of Clinical Therapies, UL',
            what: [
              'Created Angular and Firebase web-app leveraging text-to-speech services to teach users with aphasia to speak and enunciate words.',
              'Conducted user observation and acceptance testing throughout clinical trials at University Limerick.',
            ],
            when: '2014 - 2015',
          },
          {
            title: "Triana Care",
            subtitle: '',
            skills: ['Prototyping (Balsamiq)', 'Laravel', 'Angular', 'ElasticSearch', 'SQL'],
            icon: 'shapes',
            what: [
              'Worked with business analyst to gather product requirements and use cases related to patient care in the US hospice industry.',
              'Designed and developed product solutions using increasingly higher fidelity prototypes.',
              'Key fullstack contributor on Laravel (and Elastic) back-end and Angular front-end.',
            ],
            when: '2014 - 2015',
          },
          {
            title: "iTRAC Global",
            subtitle: '',
            skills: ['Angular', 'Laravel', 'Elasticsearch', 'SQL'],
            icon: 'laptop-code',
            what: [
              'One of the lead developers for a global customs and excise web app, defining the front-end architecture and acting as a key back-end contributor.',
              'Regularly prototyped and tested new features with key stakeholders.',
              'Contributed to headless browser export system based on PhantomJS.',
              'Implemented Elasticsearch (and memcached)',
            ],
            when: '2012 - 2014',
          },
          {
            title: "22 Touch",
            subtitle: '',
            skills: ['ExpressionEngine', 'PHP', 'SQL', 'JS'],
            icon: 'calendar-alt',
            what: [
              'Led front-end and back-end development for major redesign of a referral marketing web application.',
              'Created custom ExpressionEngine extensions and hooks to support required functionality.',
              'Created a genetic algorithm responsible for defining communication touch points schedule.'
            ],
            when: '2012 - 2014',
          },
          {
            title: "Elite Edge",
            subtitle: '',
            skills: ['JS', 'PHP', 'Flex/Flash Builder'],
            icon: 'chart-line',
            what: [
              'Led front-end and back-end development on sports science web application used by the Welsh Rugby Union, British & Irish Lions, National Athlete Development Academy and Munster Rugby.',
            ],
            when: '2010 - 2014',
          },
          {
            title: "Tricycle Interactive Ltd",
            subtitle: '',
            skills: ['Objective-C', 'PHP', 'JS', 'SQL', 'Flex/Flash Builder'],
            icon: 'code',
            what: [
              'Rebuilt and extended athlete monitoring and analytics platform for the Welsh Rugby Union. Led requirements gathering with SMEs and applied a user-centered design process.',
              'Led development for various clients in iOS (Objective-C), Flex/Flash Builder, and more.',
              'Contributor on DocTOT and MotorCheck iOS app series.',
            ],
            when: '2010 - 2011',
          },
        ],
        education: [
          {
            title: "Ph.D.",
            where: 'University of Limerick',
            icon: 'graduation-cap',
            what: [
              'I have developed a number of applications and utilities targeted at the rehabilitation of individuals with aphasia and concomitant cognitive deficits. My research has examined the efficacy of mobile applications in self-guided speech and language therapy.',
            ],
            when: '2006 - 2010 (Incomplete)',
          },
          {
            title: "Undergraduate",
            subtitle: '',
            where: 'University of Limerick',
            icon: 'graduation-cap',
            what: [
              'I graduated in 2010 with a first class honours, earning a B.Sc. in Music, Media and Performance Technology',
            ],
            when: '2006 - 2010',
          },
        ],
        awards: [
          {
            title: "Accenture Academic Innovation Award",
            icon: 'award',
            when: '2010',
          },
          {
            title: "University of Limerick Advanced Scholar Scheme",
            icon: 'award',
            when: '2010',
          },
          {
            title: "Tweak Festival Student Showcase",
            icon: 'award',
            when: '2009',
          },
          {
            title: "University of Limerick President's List",
            icon: 'award',
            when: '2007 - 2010',
          },
        ]
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/mixins/breakpoints";
  @import "../styles/variables/colors";

  .content {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;

    @include for-tablet-landscape-up {
      padding: 0 32px;
    }

    p:not(:first-child) {
      margin-top: 16px;
    }

    &__section {
      display: flex;
      flex-wrap: wrap;
      background-color: white;
      border-radius: 8px;
      padding: 32px;
      margin-bottom: 32px;
      position: relative;

      @include print {
        margin-bottom: 0;
        border-radius: 0;

        h2 {
          font-size: 24px;
        }

        &:after {
          content: ' ';
          background-color: $color--accent;
          position: absolute;
          height: 1px;
          bottom: 0;
          left: 32px;
          right: 32px;
        }
      }
    }

    &__section:last-child {
      margin-bottom: 0;
    }

    &__section--writing {
      ul {
        list-style: none;
        padding: 0;
      }

      li {
        padding: 8px 0;
      }
    }

    &__row {
      flex: 1 0 100%;
      display: flex;
      flex-wrap: wrap;
    }

    &__column {
      flex: 1 1 auto;
    }

    &__column--50 {
      flex: 1 0 50%;
      padding: 16px;

      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
    }

    @include for-phone-only {
      @include screen {
        .content__column,
        .content__column--50 {
          flex: 1 0 100%;
          padding: 0;

          + .content__column {
            margin-top: 16px;
          }
        }

        .content__skills {
          margin: 32px 0;
        }
      }
    }

    .logos {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      padding: 16px 0;

      @include print {
        display: none;
      }
    }

    .logos img {
      height: 64px;
      margin: 16px 32px;
      cursor: pointer;
      filter: opacity(0.3) saturate(0);

      @include for-phone-only {
        height: 48px;
        margin: 16px;
      }

      &:hover {
        filter: none;
      }
    }
  }


</style>
