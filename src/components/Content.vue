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
            icon: 'far fa-handshake',
            skills: ['Vue', 'Go', 'Coffeescript', 'KnockoutJS', 'Coldfusion', 'Product Analytics (Pendo)', 'SQL (MariaDB)', 'Redis', 'Hiring', 'Planning'],
            what: "As Technical Lead of Teamwork's main product, I have been responsible for all areas of the product's delivery, including cross-fuctional hiring, product planning and reviews.",
            when: '2015 - present',
          },
          {
            title: "SANTA",
            subtitle: 'Self-Administered Naming Therapy for Aphasia',
            skills: ['Research', 'Prototyping (Balsamiq)', 'Firebase', 'Angular', 'Objective-C'],
            icon: 'fas fa-flask',
            where: 'Department of Clinical Therapies, UL',
            what: 'SANTA is a cross-platform web application for users with aphasia. The application uses text-to-speech in order to teach aphasic users to speak and enunciate words. I am responsible for all aspects of the system\'s design, development and user acceptance testing.',
            when: '2014 - 2015',
          },
          {
            title: "Triana Care",
            subtitle: '',
            skills: ['Prototyping (Balsamiq)', 'Laravel', 'Angular', 'ElasticSearch'],
            icon: 'fas fa-shapes',
            what: 'Triana Care has led to the creation of software systems for the US hospice industry to improve the level of patient care. I have been solely responsible for the system\'s user experience and evaluation. I have also contributed to much of the system\'s front-end and back-end architecture.',
            when: '2014 - 2015',
          },
          {
            title: "iTRAC Global",
            subtitle: '',
            skills: ['Angular', 'Laravel', 'Elasticsearch'],
            icon: 'fas fa-laptop',
            what: 'iTRAC Global is a global customs and excise software package. As the project’s first and longest-serving developer, I have been responsible for defining much of the system architecture and implementing designs concepts.',
            when: '2012 - 2014',
          },
          {
            title: "22 Touch",
            subtitle: '',
            skills: ['ExpressionEngine', 'JS'],
            icon: 'fas fa-robot',
            what: '22 Touch is a referral marketing web application. I was involved in both the redesign and implementation of the system, developing a series of new features and designing a genetic algorithm on which the application is heavily dependent.',
            when: '2012 - 2014',
          },
          {
            title: "Elite Edge",
            subtitle: '',
            skills: ['JS', 'PHP', 'Flex/Flash Builder'],
            icon: 'fas fa-running',
            what: 'Elite Edge is a cross-platform sports science application. To date the application has been extensively used by the British and Irish Lions, the National Athlete Development Academy and Munster Rugby. I am responsible for the system\'s requirements gathering, back-end design and front-end development.',
            when: '2010 - 2014',
          },
          {
            title: "Tricycle Interactive Ltd",
            subtitle: '',
            skills: ['Objective-C', 'PHP', 'JS', 'Flex/Flash Builder'],
            icon: 'far fa-thumbs-up',
            what: 'I rebuilt and extended the WRU sports science system, creating a suite of new features, implementing a usercentered design approach in the process. Additionally, I led a number of projects for clients including iOS applications for MotorCheck and Opoko.',
            when: '2010 - 2011',
          },
        ],
        education: [
          {
            title: "Ph.D.",
            subtitle: 'Incomplete',
            where: 'University of Limerick',
            icon: 'fas fa-graduation-cap',
            what: 'I have developed a number of applications and utilities targeted at the rehabilitation of individuals with aphasia and concomitant cognitive deficits. My research has examined the efficacy of mobile applications in self-guided speech and language therapy.',
            when: '2006 - 2010',
          },
          {
            title: "Undergraduate",
            subtitle: '',
            where: 'University of Limerick',
            icon: 'fas fa-graduation-cap',
            what: 'I graduated in 2010 with a first class honours, earning a B.Sc. in Music, Media and Performance Technology',
            when: '2006 - 2010',
          },
        ],
        awards: [
          {
            title: "Accenture Academic Innovation Award",
            icon: 'fas fa-award',
            when: '2010',
          },
          {
            title: "University of Limerick Advanced Scholar Scheme",
            icon: 'fas fa-award',
            when: '2010',
          },
          {
            title: "Tweak Festival Student Showcase",
            icon: 'fas fa-award',
            when: '2009',
          },
          {
            title: "University of Limerick President's List",
            icon: 'fas fa-award',
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

        &:after {
          content: ' ';
          background-color: #eee;
          position: absolute;
          height: 1px;
          bottom: 0;
          left: 32px;
          right: 32px;
        }
        margin-bottom: 0;
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

    .logos {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      padding: 16px 0;

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
