//components
import StyledSpecialties from './StyledSpecialties';
import HeroImage from 'components/HeroImage';
import StyledContentSection from 'components/ContentSection/StyledContentSection';
import BaseButton from 'components/reusables/BaseButton';
//images
import {
  WhiteNotebookImg,
  MoodDisordersImg,
  ComplexTraumaImg,
  TeenAdolescentImg,
  CulturalImg,
  BodyImageImg,
  DatingImg,
} from 'assets';
// const specialties
export default function Specialties() {
  return (
    <StyledSpecialties>
      <HeroImage
        color={'black'}
        id="treatment-specialties"
        imgLink={WhiteNotebookImg}
        text={['treatment', 'specialties']}
      />
      <StyledContentSection className="discover-content">
        <h2 className="large-heading">When you&apos;re ready to try something new</h2>
        <h3 className="small-heading">Discover the transformative power of therapy.</h3>
        <p className="paragraph-content">
          Feeling stuck? Overwhelmed? It&apos;s time for a fresh perspective.
        </p>
        <p className="paragraph-content">
          Therapy offers personalized support to help you overcome challenges and achieve lasting
          change. I provide evidence-based techniques and a compassionate approach to help you
          explore your emotions, gain insights, and develop practical skills. With flexible
          scheduling and virtual sessions, therapy is accessible from anywhere. Take the first step
          towards a happier, more balanced life.
        </p>
      </StyledContentSection>
      <div className="booking-box embark-box height-box">
        <p>
          EMBARK on a <br className="line-break" />
          TRANSFORMATIVE JOUNRNEY
          <br className="line-break" /> of self-discovery and healing.
        </p>
        <BaseButton text={'Book Now'} />
      </div>
      <HeroImage
        id="mood-disorders"
        color={'white'}
        imgLink={MoodDisordersImg}
        text={['mood disorders']}
      />
      <div className="booking-box impact-box height-box">
        <p>
          DISCOVER the <br className="line-break" />
          IMPACT of therapy
        </p>
        <BaseButton text={'Book Now'} />
      </div>
      <StyledContentSection className="empower-content">
        <h3 className="small-heading empower-heading">Empowering therapy for mood disorders.</h3>
        <h2 className="large-heading relief-heading">Find relief and regain control today</h2>
        <p className="paragraph-content">
          Experience the power of effective therapy for mood disorders. Through compassionate
          therapy, you can find relieve and regain control of your life. With evidence-based
          techniques and personalized support, I can help empower you to overcome mood disorders,
          including anxiety and depression to embrace a brighter future. Take charge of your
          well-being today and discover the transformative impact of therapy.
        </p>
      </StyledContentSection>
      <HeroImage
        id="complex-trauma"
        color="white"
        imgLink={ComplexTraumaImg}
        text={['complex trauma']}
      />
      <div className="blank-wrapper">
        <StyledContentSection className="heal-content">
          <h2 className="large-heading">Heal and Thrive</h2>
          <h3 className="small-heading">Reclaim your life and find your strength.</h3>
          <p className="paragraph-content">
            Not all therapists are created equal. If you&apos;ve experienced trauma, you may know
            that finding calm and strength is not easy. Trauma therapy is a specialty. Those who
            have said you cannot go wrong by trying therapy, have never experienced a poorly trained
            therapist. With compassionate support, evidence-based techniques, and psycho-education,
            I can help you navigate the complexities of trauma. Together, we can embark on a
            transformative journey of healing and empowerment. Find solace, regain control, and
            create a brighter future.
          </p>
        </StyledContentSection>
        <div className="blank-space"></div>
      </div>
      <HeroImage
        id="teens-adolescents"
        color="white"
        imgLink={TeenAdolescentImg}
        text={['teens &', 'adolescents']}
      />
      <StyledContentSection className="growth-content">
        <h2 className="large-heading">Where healing and growth take center stage</h2>
        <p className="paragraph-content">
          We understand that adolescence can be a challenging time, and when combined with the
          impact of trauma, it can be even more overwhelming. I am here to provide the support and
          guidance your adolescent needs to navigate these difficult experiences.
        </p>
        <p className="paragraph-content">
          As a social worker with experience in both the juvenile justice and public school system,
          I specialize in adolescent and trauma therapy, offering a safe and nurturing environment
          for young individuals to explore their emotions, heal from past traumas, and develop
          healthy coping mechanisms. I believe in a fun, holistic approach that addresses the mind,
          body, and spirit, empowering adolescents to regain control of their lives and thrive.
        </p>
        <p className="paragraph-content">
          I am experienced in working with adolescents, to understand the unique challenges they
          face during this transitional period. Whether your adolescent has experienced abuse,
          neglect, violence, or any other form of trauma, I am here to walk alongside them on their
          healing journey.
        </p>
        <p className="paragraph-content">
          In our therapy sessions, I create a safe and non-judgmental space where adolescents can
          freely express themselves. I utilize various therapeutic modalities, such as
          cognitive-behavioral therapy (CBT), dialectical behavior therapy (DBT), and art. These
          approaches are proven to be effective in helping adolescents process trauma, manage
          emotions, improve self-esteem, and develop healthy relationships.
        </p>
      </StyledContentSection>
      <HeroImage
        id="cultural-trauma-diaspora"
        imgLink={CulturalImg}
        color="white"
        text={['cultural trauma,', 'diaspora &', 'social marginaliztion']}
      />
      <StyledContentSection className="embrace-content">
        <h2 className="large-heading">Embrace Healing, Embrace Belonging</h2>

        <p className="paragraph-content">
          Discover a safe haven for healing from cultural trauma, social marginalization, and the
          experience of otherness. I&apos;ve been there personally and know what it is to feel like
          you neither have a foot in one door nor can you say you really have a foot in another.
          This experience gives me the ability to understand the emotions that come when you
          struggle with identity and social/cultural norms. I offer compassionate support and
          specialized care that can help to navigate the challenges associated with reclaiming your
          sense of self and belonging. Experience the transformation towards empowerment,
          acceptance, and inner strength with a focus on culturally sensitive therapy. Embrace
          healing and find your place in a supportive community.
        </p>
      </StyledContentSection>
      <div className="booking-box embark-box height-box">
        <p>
          FEEL what it is to be <br className="line-break" />
          WELCOMED
        </p>
        <BaseButton text={'Book Now'} />
      </div>
      <HeroImage
        id="eating-disorders-body-image"
        imgLink={BodyImageImg}
        text={['eating disorders', '&', 'body image']}
        color={'white'}
      />
      <StyledContentSection className="discover-content">
        <h2 className="large-heading">
          Isn&apos;t it about time you had a healthy relationship ... with yourself?
        </h2>
        <p className="paragraph-content">
          Discover a safe haven for healing from cultural trauma, social marginalization, and the
          experience of otherness. I&apos;ve been there personally and know what it is to feel like
          you neither have a foot in one door nor can you say you really have a foot in another.
          This experience gives me the ability to understand the emotions that come when you
          struggle with identity and social/cultural norms. I offer compassionate support and
          specialized care that can help to navigate the challenges associated with reclaiming your
          sense of self and belonging. Experience the transformation towards empowerment,
          acceptance, and inner strength with a focus on culturally sensitive therapy. Embrace
          healing and find your place in a supportive community.
        </p>
      </StyledContentSection>
      <div className="booking-box impact-box height-box">
        <p>
          DISCOVER the <br className="line-break" />
          IMPACT of therapy
        </p>
        <BaseButton text={'Book Now'} />
      </div>
      <HeroImage
        id="dating-relationships"
        color={'white'}
        imgLink={DatingImg}
        text={['dating', '&', 'relationships']}
      />
      <StyledContentSection className="build-content">
        <h2 className="large-heading">Build strong connections</h2>
        <h3 className="small-heading">Get back in sync with your person.</h3>
        <p className="paragraph-content">
          Rediscover the love, trust, and connection in your relationship with our specialized
          couples therapy. Our experienced therapists provide a safe and supportive space to address
          challenges, improve communication, and deepen intimacy. Whether you&apos;re facing
          conflicts, seeking premarital guidance, or aiming to strengthen your bond, our
          personalized approach will help you revitalize your relationship. Rekindle the flame and
          create a lasting connection with our transformative Couples Therapy.
        </p>
      </StyledContentSection>
    </StyledSpecialties>
  );
}
