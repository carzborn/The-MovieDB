import Button from 'react-bootstrap/Button'

const Pagination = ({page, totalPages, onChangePage}) => {
  return (
      <div className="d-flex align-items-center justify-content-between">
          
          <Button 
            variant='dark'
            disabled={page -1 === 0}
            onClick={() => onChangePage({page: Number(page) - 1}) }
          >Previous</Button>

          <span>{page}/{totalPages}</span>

          <Button 
            variant='dark'
            disabled={page >= totalPages }
            onClick={() => onChangePage({page: Number(page) + 1}) }
          >Next</Button>
      </div>
  )
}

export default Pagination