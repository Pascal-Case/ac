import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState, useMemo, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Context1 } from '../App';
import { useDispatch } from 'react-redux';
import { addCart } from '../store/cartSlice';

// 상수 분리
const ALERT_DURATION = 2000;
const FADE_DELAY = 100;

// 최근 본 상품 로컬스토리지 관리 훅
const useRecentlyViewed = (itemId) => {
  useEffect(() => {
    if (!itemId) return;

    try {
      const latest = JSON.parse(localStorage.getItem('latest') || '[]');
      const updatedLatest = Array.from(new Set([...latest, itemId]));
      localStorage.setItem('latest', JSON.stringify(updatedLatest));
    } catch (error) {
      console.error('Failed to update recently viewed items:', error);
    }
  }, [itemId]);
};

// 페이드 애니메이션 훅
const useFadeAnimation = (dependency = []) => {
  const [fade, setFade] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setFade('end'), FADE_DELAY);

    return () => {
      clearTimeout(timer);
      setFade('');
    };
  }, dependency);

  return fade;
};

// 할인 알림 훅
const useDiscountAlert = () => {
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, ALERT_DURATION);

    return () => clearTimeout(timer);
  }, []);

  return alert;
};

function Detail({ shoes = [] }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);

  // 현재 상품 찾기 (useMemo로 최적화)
  const currentItem = useMemo(() => shoes.find((item) => item.id === parseInt(id)), [shoes, id]);

  // 커스텀 훅들 사용
  useRecentlyViewed(currentItem?.id);
  const fadeClass = useFadeAnimation();
  const showAlert = useDiscountAlert();

  // 장바구니 추가 핸들러
  const handleAddToCart = useCallback(() => {
    if (currentItem) {
      dispatch(addCart(currentItem));
    }
  }, [dispatch, currentItem]);

  // 탭 변경 핸들러
  const handleTabChange = useCallback((tabIndex) => {
    setTab(tabIndex);
  }, []);

  // 상품이 없는 경우 처리
  if (!currentItem) {
    return (
      <Container className="text-center py-5">
        <h3>상품을 찾을 수 없습니다.</h3>
      </Container>
    );
  }

  return (
    <Container className={`start ${fadeClass}`}>
      {showAlert && (
        <div className="alert alert-warning" id="discount">
          할인
        </div>
      )}

      <Row>
        <Col md={6}>
          <Image src={currentItem.src} width="100%" thumbnail alt={currentItem.title} />
        </Col>
        <Col md={6} className="text-center">
          <h4 className="pt-5">{currentItem.title}</h4>
          <p>{currentItem.content}</p>
          <p className="fw-bold">{currentItem.price}원</p>
          <Button variant="outline-success" onClick={handleAddToCart} size="lg">
            주문하기
          </Button>
        </Col>
      </Row>

      <TabNavigation currentTab={tab} onTabChange={handleTabChange} />
      <TabContent tab={tab} currentItem={currentItem} />
    </Container>
  );
}

// 탭 네비게이션 컴포넌트 분리
function TabNavigation({ currentTab, onTabChange }) {
  const tabs = [
    { key: 'link0', label: '상품설명', index: 0 },
    { key: 'link1', label: '리뷰', index: 1 },
    { key: 'link2', label: '배송정보', index: 2 },
  ];

  return (
    <Nav variant="pills" className="mt-4">
      {tabs.map(({ key, label, index }) => (
        <Nav.Item key={key}>
          <Nav.Link eventKey={key} active={currentTab === index} onClick={() => onTabChange(index)}>
            {label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

// 탭 컨텐츠 컴포넌트 개선
function TabContent({ tab, currentItem }) {
  const { stock } = useContext(Context1);
  const fadeClass = useFadeAnimation([tab]);

  const tabContents = [
    <ProductDescription stock={stock[currentItem.id]} />,
    <ProductReviews currentItem={currentItem} />,
    <ShippingInfo />,
  ];

  return <div className={`start ${fadeClass} mt-3`}>{tabContents[tab]}</div>;
}

// 각 탭 컨텐츠를 별도 컴포넌트로 분리
function ProductDescription({ stock }) {
  return (
    <div className="p-3">
      <h5>상품 설명</h5>
      <p>현재 재고: {stock}개</p>
      <p>이 상품은 고품질 소재로 제작되었습니다.</p>
    </div>
  );
}

function ProductReviews({ currentItem }) {
  return (
    <div className="p-3">
      <h5>고객 리뷰</h5>
      <p>{currentItem.title}</p>
      <p>리뷰 내용이 여기에 표시됩니다.</p>
    </div>
  );
}

function ShippingInfo() {
  return (
    <div className="p-3">
      <h5>배송 정보</h5>
      <p>무료배송 (5만원 이상 구매시)</p>
      <p>평균 배송기간: 2-3일</p>
    </div>
  );
}

export default Detail;
